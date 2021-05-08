import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITheme } from '../interfaces/theme';

import { environment } from "../../environments/environment"
const apiURL = environment.apiURL

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) { }

  loadThemes(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`${apiURL}/themes`)
  }
  getTheme(id: string): Observable<ITheme> {
    return this.http.get<ITheme>(`${apiURL}/themes/${id}`)
  }
}
