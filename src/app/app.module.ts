import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {provideHttpClient, withFetch, withInterceptorsFromDi} from "@angular/common/http";
import {HTTP} from "@awesome-cordova-plugins/http/ngx";
import {HttpService} from "./services/http.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HTTP,
    HttpService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
