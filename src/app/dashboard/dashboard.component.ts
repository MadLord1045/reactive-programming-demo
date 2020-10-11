import { Component } from '@angular/core';
import { map, mergeMap, startWith } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { PostsService } from '../services/posts.service';
import { FormControl } from '@angular/forms';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  
  search = new FormControl('');
  
  cards = this.search.valueChanges.pipe(startWith(''), mergeMap((val) => this.posts.searchPost(val)));

  postComments = this.comments.list;
  
  constructor(private comments: CommentsService, private posts: PostsService) {}
}
