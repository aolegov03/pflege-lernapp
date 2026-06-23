export class EventBus {
  constructor() {
    this.listeners = new Map();
  }

  on(eventName, callback) {
    const callbacks = this.listeners.get(eventName) ?? new Set();
    callbacks.add(callback);
    this.listeners.set(eventName, callbacks);
    return () => callbacks.delete(callback);
  }

  emit(eventName, payload = {}) {
    const callbacks = this.listeners.get(eventName) ?? new Set();
    callbacks.forEach((callback) => callback(payload));
  }
}
