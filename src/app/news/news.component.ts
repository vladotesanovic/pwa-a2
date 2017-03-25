import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { State } from '../store/news/news.reducer';
import { INews } from '../services/news.service';

import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news$: Observable<INews>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.news$ = this.store.select('news').pluck('items');
  }
}
