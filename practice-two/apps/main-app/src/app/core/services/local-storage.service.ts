import { Injectable } from '@angular/core';
import { ExecSyncOptionsWithBufferEncoding } from 'child_process';

@Injectable()
export class LocalStorageService {
  constructor() {}

  /**
   * Set order item into local storage
   * @param key Name of storage
   * @param value The list to set
   */
  setStorage(key: string, values: any) {
    localStorage.setItem(key, JSON.stringify(values));
  }

  /**
   * Get list order item from local storage
   * @param key Name of storage have to get
   */
  getStorage(key: string) {
    let list = localStorage.getItem(key);
    return list ? JSON.parse(list) : [];
  }
}
