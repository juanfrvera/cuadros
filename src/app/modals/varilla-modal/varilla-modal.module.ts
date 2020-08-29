import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VarillaModalPageRoutingModule } from './varilla-modal-routing.module';

import { VarillaModalPage } from './varilla-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VarillaModalPageRoutingModule
  ],
  declarations: [VarillaModalPage]
})
export class VarillaModalPageModule {}
