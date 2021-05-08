import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/user';
const apiURL = environment.apiURL

@Injectable()
export class UserService {
  get isLogged(): boolean {
    return !!sessionStorage.getItem("user")
  }
  get username(): string {
    const user = JSON.parse(sessionStorage.getItem("user"))
    return user.username
  }
  get wholeInfo(): IUser {
    return JSON.parse(sessionStorage.getItem("user"))
  }
  constructor(private http: HttpClient) { }

  login(body: Object): Observable<IUser> {
    return this.http.post<IUser>(`${apiURL}/login`, body, { withCredentials: true }).pipe(
      tap(x => sessionStorage.setItem("user", JSON.stringify(x)))
    )
  }
  register(body: Object): Observable<IUser> {
    return this.http.post<IUser>(`${apiURL}/register`, body, { withCredentials: true }).pipe(
      tap(x => sessionStorage.setItem("user", JSON.stringify(x))))
  }
  logout(): void {
    sessionStorage.removeItem("user")
  }
  editUser(body): Observable<IUser> {
    return this.http.put<IUser>(`${apiURL}/users/profile`, body, { withCredentials: true }).pipe(
      tap(x => sessionStorage.setItem("user", JSON.stringify(x))))
  }
}
