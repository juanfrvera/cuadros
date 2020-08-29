import { Component, OnInit } from '@angular/core';
import { IonSlides, IonSegment } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { VarillaModalPage } from '../modals/varilla-modal/varilla-modal.page';
import { PaspartuModalPage } from '../modals/paspartu-modal/paspartu-modal.page';
import { Varilla } from '../typings/varilla';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  slideMode: string;

  varillas: Varilla[] = [
    { name: 'varilla1', color: '#fg2' },
    { name: 'varilla2', color: '#bca' },
    { name: 'varilla3', color: '#345' },
    { name: 'varilla4', color: '#6fc' },
    { name: 'varilla5', color: '#fc2' },
    { name: 'varilla6', color: '#b07' },
    { name: 'varilla7', color: '#fa9' },
    { name: 'varilla8', color: '#bf5' },
    { name: 'varilla9', color: '#cc8' },
    { name: 'varilla10', color: '#38f' }
  ];


  paspartus = ['#76f', '#041', '#fbc', '#312', '#51f', '#f02', '#f31'];

  private varillaIndex = 0;
  private paspartuIndex = 0;

  private segment: IonSegment;

  private varillaSlides: IonSlides;
  private paspartuSlides: IonSlides;

  get currentVarilla(): Varilla {
    return this.varillas[this.varillaIndex];
  }
  get currentPaspartu(): string {
    return this.paspartus[this.paspartuIndex];
  }

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    // Get segment and slides from HTML
    this.segment = document.querySelector("#segment") as unknown as IonSegment;
    this.varillaSlides = document.querySelector('#varillaSlides') as unknown as IonSlides;
    this.paspartuSlides = document.querySelector('#paspartuSlides') as unknown as IonSlides;
  }

  segmentChanged(ev: any) {
    this.slideMode = this.segment.value;

    if (this.slideMode == 'varilla') {
      this.varillaSlides.getActiveIndex().then((index) => {
        // Slide to the index that was changed while the slider was hidden
        if (index != this.varillaIndex) {
          this.varillaSlides.slideTo(this.varillaIndex);
        }
      });
    }
    // slideMode == 'paspartu'
    else {
      this.paspartuSlides.getActiveIndex().then((index) => {
        // Slide to the index that was changed while the slider was hidden
        if (index != this.paspartuIndex) {
          this.paspartuSlides.slideTo(this.paspartuIndex);
        }
      });
    }

  }

  async showVarillaModal() {
    const modal = await this.modalController.create({
      component: VarillaModalPage,
      cssClass: 'my-custom-class'
    });
    modal.present();

    const { data } = await modal.onWillDismiss();
    if (data != null) {
      this.varillaSelected(data.index);
    }
  }

  async showPaspartuModal() {
    const modal = await this.modalController.create({
      component: PaspartuModalPage,
      cssClass: 'my-custom-class'
    });
    modal.present();

    const { data } = await modal.onWillDismiss();
    if (data != null) {
      this.paspartuSelected(data.index);
    }
  }

  varillaSelected(index: number) {
    if (this.slideMode == 'varilla') {
      // Slide with animation
      this.varillaSlides.slideTo(index);
    }
    else {
      // Just change the index
      this.varillaIndex = index;
    }
  }
  paspartuSelected(index: number) {
    if (this.slideMode == 'paspartu') {
      // Slide with animation
      this.paspartuSlides.slideTo(index);
    }
    else {
      // Just change the index
      this.paspartuIndex = index;
    }
  }

  varillaSlideChanged() {
    this.varillaSlides.getActiveIndex().then((index) => {
      this.varillaIndex = index;
    });
  }
  paspartuSlideChanged() {
    this.paspartuSlides.getActiveIndex().then((index) => {
      this.paspartuIndex = index;
    });
  }
}
