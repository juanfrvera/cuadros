import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-varilla-modal',
  templateUrl: './varilla-modal.page.html',
  styleUrls: ['./varilla-modal.page.scss'],
})
export class VarillaModalPage implements OnInit {
  searchText: string = "";
  varillas = ['varilla1', 'varilla2', 'varilla3', 'varilla4', 'varilla5', 'varilla6', 'varilla7', 'varilla8', 'varilla9', 'varilla10']
  filteredVarillas: string[];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.filteredVarillas = this.varillas;
  }

  clickVarilla(index: number) {
    console.log('Index clicked: ' + index);
    // Close this modal and pass the selected varilla
    this.modalCtrl.dismiss({
      'varillaIndex': index
    });
  }

  // Close without a selected varilla
  close() {
    this.modalCtrl.dismiss();
  }

  filterItems(searchTerm: string, items: any[]) {
    return items.filter(item => {
      return item.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  filterVarillas(searchTerm: string) {
    return this.filterItems(searchTerm, this.varillas);
  }

  searchChanged() {
    this.filteredVarillas = this.filterVarillas(this.searchText);
  }
}
