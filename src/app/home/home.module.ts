import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {TabsComponent} from "../tabs/tabs.component";
import {ModalComponent} from "../Components/modal/modal.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
    ],
  declarations: [HomePage, TabsComponent, ModalComponent]
})
export class HomePageModule {}
