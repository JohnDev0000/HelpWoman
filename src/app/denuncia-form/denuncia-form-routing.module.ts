import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DenunciaFormPage } from './denuncia-form.page';

const routes: Routes = [
  {
    path: '',
    component: DenunciaFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DenunciaFormPageRoutingModule {}
