import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  searchPost(keyword) {
    return this.http.get(`${this.url}?q=${keyword}`);
  }
}
