import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaspartuModalPageRoutingModule } from './paspartu-modal-routing.module';

import { PaspartuModalPage } from './paspartu-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaspartuModalPageRoutingModule
  ],
  declarations: [PaspartuModalPage]
})
export class PaspartuModalPageModule {}
