import { Component, OnInit } from '@angular/core';
import { NewsService, INews } from './news.service';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {

  news$: Observable<INews>;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.news$ = this.newsService.getLatestNews();
  }

}
