import { fileDateStamp } from '../utils/date.js';

export class BackupService {
  constructor(progressService) {
    this.progressService = progressService;
  }

  exportProgress() {
    const state = this.progressService.getState();
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `pflege-lernapp-backup-${fileDateStamp()}.json`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  importProgressFromFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const parsed = JSON.parse(reader.result);
          await this.progressService.importState(parsed);
          resolve(parsed);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsText(file);
    });
  }
}
