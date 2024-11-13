import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";
import {HTTP} from '@awesome-cordova-plugins/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = 'https://www.ipea.gov.br/atlasviolencia/api/v1';

  constructor(private httpCapPlugin: HTTP, private http: HttpClient) {
  }

  async getTemas(): Promise<any> {
    try {
      const response = await this.httpCapPlugin.get(`${this.apiUrl}/temas`, {}, {});
      return JSON.parse(response.data);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      throw error;
    }
  }

  getTema(): Observable<any> {
    const url = `${this.apiUrl}/temas`;
    const headers = {
      'Content-Type': 'application/json',
    };
    return this.http.get(url, { headers: new HttpHeaders(headers) });
  }


}
