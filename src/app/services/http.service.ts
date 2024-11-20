import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
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

  getEverything(query: string, language = 'pt'): Observable<any> {
    const url = `${this.apiUrl}/everything?q=${query}&language=${language}`;
    const headers = new HttpHeaders().set('X-Api-Key', environment.newsApiKey);

    return this.http.get(url, { headers });
  }

  getTopHeadlines(params: { country?: string; category?: string; q?: string; } ): Observable<any> {
    let httpParams = new HttpParams().set('apiKey', environment.newsApiKey);

    if (params.country) httpParams = httpParams.set('country', params.country);
    if (params.category) httpParams = httpParams.set('category', params.category);
    if (params.q) httpParams = httpParams.set('q', params.q);

    return this.http.get(`${this.apiUrl}/top-headlines`, { params: httpParams });
  }


}
