import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaspartuModalPage } from './paspartu-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PaspartuModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaspartuModalPageRoutingModule {}
