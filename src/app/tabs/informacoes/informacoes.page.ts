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
  isLoading: boolean = false;
  errorMessage: string | null = null;
  temas: any[] = [];

  ionViewDidEnter() {
    this.loadApiResponse();
  }

  constructor(private api: HttpService) {
  }

  loadApiResponse() {
    this.api.getTema().subscribe({
      next: (data) => {
        this.temas = data;
        console.log('Dados carregados com sucesso:', this.temas);
      },
      error: (error) => {
        console.error('Erro ao carregar temas:', error);
      }
    });
  }

}
