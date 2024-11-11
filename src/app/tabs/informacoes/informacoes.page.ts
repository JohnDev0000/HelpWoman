import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.page.html',
  styleUrls: ['./informacoes.page.scss'],
})
export class InformacoesPage {
  public infoData: string | undefined;

  ionViewDidEnter() {
    this.loadApiResponse();
  }

  constructor(private api: HttpService) {
  }

  public loadApiResponse() {
    this.api.getTemas().subscribe({
      next: (data: any) => {
        console.log('Dados: ', data)
        this.infoData = data.message;
      },
      error: (error: any) => {
        console.error('There was an error!', error);
      },
      complete: () => {
        console.log('Completed');
      }
    })
  }

}
