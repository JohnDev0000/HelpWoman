import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'alunos',
    loadChildren: () => import('./tabs/alunos/alunos.module').then( m => m.AlunosPageModule)
  },
  {
    path: 'informacoes',
    loadChildren: () => import('./tabs/informacoes/informacoes.module').then( m => m.InformacoesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./tabs/login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'denuncia-form',
    loadChildren: () => import('./denuncia-form/denuncia-form.module').then( m => m.DenunciaFormPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
