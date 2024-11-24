import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DenunciaFormPageRoutingModule } from './denuncia-form-routing.module';

import { DenunciaFormPage } from './denuncia-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DenunciaFormPageRoutingModule
  ],
  declarations: [DenunciaFormPage]
})
export class DenunciaFormPageModule {}
