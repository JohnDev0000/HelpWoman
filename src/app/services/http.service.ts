import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HTTP} from '@awesome-cordova-plugins/http/ngx';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'https://newsapi.org/v2';

  constructor(private httpCapPlugin: HTTP, private http: HttpClient) {
  }

  getTopHeadlines(query: string, language = 'pt'): Observable<any> {
    const url = `${this.apiUrl}/everything?q=${query}&language=${language}`;
    const headers = new HttpHeaders().set('X-Api-Key', environment.newsApiKey);

    return this.http.get(url, { headers });
  }

}
