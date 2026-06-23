export class StorageService {
  constructor({ dbName = 'pflege-lernapp-db', storeName = 'keyvalue', version = 1 } = {}) {
    this.dbName = dbName;
    this.storeName = storeName;
    this.version = version;
    this.db = null;
    this.usesFallback = false;
    this.localStoragePrefix = `${dbName}:`;
  }

  async init() {
    if (!('indexedDB' in window)) {
      this.usesFallback = true;
      return;
    }

    try {
      this.db = await this.openDatabase();
    } catch (error) {
      console.warn('IndexedDB konnte nicht gestartet werden. localStorage wird verwendet.', error);
      this.usesFallback = true;
    }
  }

  openDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onupgradeneeded = () => {
        const database = request.result;
        if (!database.objectStoreNames.contains(this.storeName)) {
          database.createObjectStore(this.storeName, { keyPath: 'key' });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      request.onblocked = () => reject(new Error('Datenbank-Update wurde blockiert.'));
    });
  }

  async get(key) {
    if (this.usesFallback) {
      const rawValue = localStorage.getItem(this.localStoragePrefix + key);
      return rawValue ? JSON.parse(rawValue) : null;
    }

    return this.withStore('readonly', (store) => this.promisifyRequest(store.get(key)))
      .then((record) => record?.value ?? null);
  }

  async set(key, value) {
    if (this.usesFallback) {
      localStorage.setItem(this.localStoragePrefix + key, JSON.stringify(value));
      return value;
    }

    await this.withStore('readwrite', (store) => this.promisifyRequest(store.put({ key, value })));
    return value;
  }

  async delete(key) {
    if (this.usesFallback) {
      localStorage.removeItem(this.localStoragePrefix + key);
      return;
    }

    await this.withStore('readwrite', (store) => this.promisifyRequest(store.delete(key)));
  }

  async withStore(mode, callback) {
    if (!this.db) {
      throw new Error('StorageService wurde noch nicht initialisiert.');
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(this.storeName, mode);
      const store = transaction.objectStore(this.storeName);
      let requestPromise;

      try {
        requestPromise = callback(store);
      } catch (error) {
        reject(error);
        return;
      }

      transaction.oncomplete = () => {
        Promise.resolve(requestPromise).then(resolve).catch(reject);
      };
      transaction.onerror = () => reject(transaction.error);
      transaction.onabort = () => reject(transaction.error);
    });
  }

  promisifyRequest(request) {
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
}
