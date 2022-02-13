import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() {
    console.log('sessionStorage constructor');
   }

  public saveData(data: any): void {
    sessionStorage.setItem('data', JSON.stringify(data));
  }

  public loadData(): string {
    return sessionStorage.getItem('data');
  }
}
