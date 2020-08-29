import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { VarillaModalPage } from '../modals/varilla-modal/varilla-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  varillas = ['varilla1', 'varilla2', 'varilla3', 'varilla4', 'varilla5', 'varilla6', 'varilla7', 'varilla8', 'varilla9', 'varilla10']
  
  private varillaIndex = 0;
  // Slides for marcos
  private slides: IonSlides;

  get currentVarilla() : string{
    return this.varillas[this.varillaIndex];
  }

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    // Get slides from HTML
    this.slides = document.querySelector('#mySlides');
  }

  async showVarillaModal() {
    const modal = await this.modalController.create({
      component: VarillaModalPage,
      cssClass: 'my-custom-class'
    });
    modal.present();

    const {data} = await modal.onWillDismiss();
    this.varillaSelected(data.varillaIndex);
  }

  varillaSelected(index: number) {
    this.slides.slideTo(index);
  }

  slideChanged(){
    this.slides.getActiveIndex().then((index) =>{
      this.varillaIndex = index;
    });
  }

}
