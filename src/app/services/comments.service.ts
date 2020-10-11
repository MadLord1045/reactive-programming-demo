import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { mergeMap, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  url = 'http://localhost:3000/comments';
  
  getComments = () => {
    return this.http.get(this.url);
  }

  list = (new Subject()).pipe(startWith(null), mergeMap(this.getComments));

  constructor(private http: HttpClient) { }

}
