import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
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
  headlines: any[] = [];
  filters: { country?: string; category?: string; q?: string } = {};

  constructor(private newsService: HttpService) {
  }

  fetchNews(query: string) {
    if (!query.trim()) return;

    this.loading = true;
    this.error = null;
    this.searchAttempted = true;

    this.newsService.getEverything(this.query).subscribe({
      next: (data) => {
        this.articles = data.articles;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao buscar notícias';
        this.loading = false;
      }
    });
  }

  fetchHeadlines() {
    this.loading = true;
    this.error = null;
    this.searchAttempted = true;

    this.newsService.getTopHeadlines(this.filters).subscribe({
      next: (data) => {
        this.headlines = data.articles || [];
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao buscar notícias, verifique os filtros de pesquisa';
        this.loading = false;
        console.log(err);
      }
    });
  }

  openArticle(url: string) {
    window.open(url, '_blank');
  }

  clearSearch() {
    this.filters = {
      country: '',
      category: '',
      q: '',
    };
    this.query = '';
    this.articles = [];
    this.headlines = [];
    this.error = null;
    this.searchAttempted = false;
  }

  // Não Funciona????
  scrollToTop() {
    console.log("Scrolling to top");
    window.scrollTo({ top: 1, left: 1, behavior: 'smooth' });
  }

}
