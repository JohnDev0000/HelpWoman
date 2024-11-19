import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.page.html',
  styleUrls: ['./informacoes.page.scss'],
})
export class InformacoesPage {
  query: string = '';
  articles: any[] = [];
  loading = false;
  error: string | null = null;
  searchAttempted: boolean = false;

  constructor(private newsService: HttpService) {
  }

  fetchNews(query: string) {
    if (!query.trim()) return;

    this.loading = true;
    this.error = null;
    this.searchAttempted = true;

    this.newsService.getTopHeadlines(this.query).subscribe({
      next: (data) => {
        this.articles = data.articles;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
        console.log(err);
      }
    });
  }

  openArticle(url: string) {
    window.open(url, '_blank');
  }

}
