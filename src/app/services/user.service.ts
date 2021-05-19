import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/user';
const apiURL = environment.apiURL

@Injectable()
export class UserService {
  user: IUser
  get username(): string {
    return this.user.username
  }
  get wholeInfo(): IUser {
    return this.user
  }
  get isLogged(): boolean {
    return !!sessionStorage.getItem("isLogged")
  }
  constructor(private http: HttpClient) { }

  login(body: Object): Observable<IUser> {
    return this.http.post<IUser>(`${apiURL}/login`, body, { withCredentials: true }).pipe(
      tap(x => {
        this.user = x
        sessionStorage.setItem("isLogged", "true")
      })
    )
  }
  register(body: Object): Observable<IUser> {
    return this.http.post<IUser>(`${apiURL}/register`, body, { withCredentials: true })
  }
  logout(): any {
    sessionStorage.removeItem("isLogged")
    this.user = undefined
    return this.http.post(`${apiURL}/logout`, {}, { withCredentials: true })
  }
  editUser(body): Observable<IUser> {
    return this.http.put<IUser>(`${apiURL}/users/profile`, body, { withCredentials: true }).pipe(
      tap(x => this.user = x)
    )
  }
}
