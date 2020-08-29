import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VarillaModalPage } from './varilla-modal.page';

const routes: Routes = [
  {
    path: '',
    component: VarillaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VarillaModalPageRoutingModule {}
