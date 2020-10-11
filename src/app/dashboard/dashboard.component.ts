import { Component } from '@angular/core';
import { map, mergeMap, startWith } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { PostsService } from '../services/posts.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  
  search = new FormControl('');
  
  cards = this.search.valueChanges.pipe(startWith(''), mergeMap((val) => this.posts.searchPost(val)));
  constructor(private breakpointObserver: BreakpointObserver, private posts: PostsService) {}
}
