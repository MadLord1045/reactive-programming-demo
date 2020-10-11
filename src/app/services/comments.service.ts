import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { mergeMap, share, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  url = 'http://localhost:3000/comments';

  triggerDelete = new Subject();

  deleteFunction = val => this.http.delete(`${this.url}/${val}`);

  delete = this.triggerDelete.pipe(mergeMap(this.deleteFunction));
  

  triggerAdd = new Subject();

  addFunction = comment => this.http.post(`${this.url}`, comment);

  add = this.triggerAdd.pipe(mergeMap(this.addFunction));
  
  getComments = () => {
    return this.http.get(this.url);
  }

  list = merge(this.delete, this.add).pipe(startWith(null), mergeMap(this.getComments), share());

  constructor(private http: HttpClient) { }

}
