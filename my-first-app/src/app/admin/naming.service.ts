import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamingService {

  constructor() { }

  getModuleName() {
    return 'jenish'
  }
}
