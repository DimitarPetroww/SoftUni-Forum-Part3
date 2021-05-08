import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  get isLogged(): boolean {
    return !!localStorage.getItem("isLogged")
  }
  constructor() { }

  login(): void {
    localStorage.setItem("isLogged", "true")
  }
  register(): void {
    localStorage.setItem("isLogged", "true")
  }
  logout(): void {
    localStorage.removeItem("isLogged")
  }
}
