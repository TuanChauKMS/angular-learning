import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_BASE = 'https://jsonplaceholder.typicode.com';

export interface PostBody {
  title: string;
  body: string;
  userId: number;
}

export interface Post extends PostBody {
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiDemoService {
  private readonly http = inject(HttpClient);

  getList(): Observable<Post[]> {
    return this.http.get<Post[]>(`${API_BASE}/posts`);
  }

  getOne(id: string): Observable<Post> {
    return this.http.get<Post>(`${API_BASE}/posts/${id}`);
  }

  post(body: PostBody): Observable<Post> {
    return this.http.post<Post>(`${API_BASE}/posts`, body);
  }

  put(id: string, body: PostBody & { id: number }): Observable<Post> {
    return this.http.put<Post>(`${API_BASE}/posts/${id}`, body);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${API_BASE}/posts/${id}`);
  }
}
