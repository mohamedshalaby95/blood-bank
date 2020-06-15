import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  register(registerData) {
    // h5znha hnaa
    localStorage.setItem('RegisterList', registerData);
  }
}
