import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchDevsService {

  private searchDevsEndpoint = "https://api.github.com/search/users?q=";
  private getDevDetailsEndpoint = "https://api.github.com/users/";

  constructor(private http: Http) { }

  getDevsByPlaceAndLanguage(place: string, language: string) {
    let url;

    if (place && !language) {
      url = `${this.searchDevsEndpoint}location:${place}`;
    } else if (!place && language) {
      url = `${this.searchDevsEndpoint}language:${language}`;
    } else {
      url = `${this.searchDevsEndpoint}location:${place}+language:${language}`;
    }

    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getDevDetailsByUsername(username: string) {
    if (username) {
      let url = `${this.getDevDetailsEndpoint}${username}`;

      return this.http.get(url)
        .map((res: Response) => res.json())
        .catch(this.handleError);
    }
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.items || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || ``;
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ``} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);

    return Observable.throw(errMsg);
  }

}
