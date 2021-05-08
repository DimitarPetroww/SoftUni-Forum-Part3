import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment"
import { IPost } from '../interfaces/post';
const apiURL = environment.apiURL

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  loadPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${apiURL}/posts?limit=5`, {withCredentials: true})
  }
}
