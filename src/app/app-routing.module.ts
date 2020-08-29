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
    path: 'varilla-modal',
    loadChildren: () => import('./modals/varilla-modal/varilla-modal.module').then( m => m.VarillaModalPageModule)
  },
  {
    path: 'paspartu-modal',
    loadChildren: () => import('./modals/paspartu-modal/paspartu-modal.module').then( m => m.PaspartuModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
