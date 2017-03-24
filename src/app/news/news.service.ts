import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from "rxjs/Rx";

import "rxjs/add/operator/map";

export interface INews {
  Title: string;
  Created: string;
}

@Injectable()
export class NewsService {

  constructor(private http: Http) {}

  getLatestNews(): Observable<INews> {
    return this.http.get('https://myallies-breaking-news-v1.p.mashape.com/news', new RequestOptions({
      headers: new Headers({
        'X-Mashape-Key': 'O9p2cWOU18mshKOD0m6aBMMVXOrxp1PaIUYjsniijuS94Ib56u',
        'Accept': 'application/json'
      })
    }))
    .map((response: Response) => response.json());
  }

}
