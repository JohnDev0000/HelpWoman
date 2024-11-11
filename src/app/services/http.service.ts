import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  proxyUrl = 'https://cors-anywhere.herokuapp.com';
  apiUrl = 'https://www.ipea.gov.br/atlasviolencia/api/v1';

  constructor(private http: HttpClient) {
  }

  getTemas(): Observable<any> {
    // return this.http.get('https://cors-anywhere.herokuapp.com/https://www.ipea.gov.br/atlasviolencia/api/v1/temas');
    return this.http.get(`https://www.ipea.gov.br/atlasviolencia/api/v1/temas`);
    // return this.http.get(`${this.proxyUrl}/${this.apiUrl}/tema/1`);
    // return this.http.get(`${this.proxyUrl}/tema/1`);
  }

  getSeries(): Observable<any> {
    return this.http.get(`/api/series`);
    // return forkJoin({
    //   serie40: this.http.get(`${this.ipeaApiUrl}/serie/40`),
    //   serie271: this.http.get(`${this.ipeaApiUrl}/serie/271`),
    //   serie317: this.http.get(`${this.ipeaApiUrl}/serie/317`),
    //   serie333: this.http.get(`${this.ipeaApiUrl}/serie/333`),
    // });
  }

  getRequest() {

  }

}
