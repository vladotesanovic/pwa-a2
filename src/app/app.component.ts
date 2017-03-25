import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from './store/index';
import { GET_NEWS } from './store/news/news.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Progressive Web App with Angular 2';

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch({
      type: GET_NEWS
    });
  }
}
