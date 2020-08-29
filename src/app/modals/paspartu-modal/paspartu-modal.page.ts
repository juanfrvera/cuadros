import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-paspartu-modal',
  templateUrl: './paspartu-modal.page.html',
  styleUrls: ['./paspartu-modal.page.scss'],
})
export class PaspartuModalPage implements OnInit {
  searchText: string = "";
  list = ['#cba', '#041', '#fbc', '#312', '#51f', '#f02', '#f31']
  filteredList: string[];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.filteredList = this.list;
  }

  clickPaspartu(index: number) {
    // Close this modal and pass the selected index
    this.modalCtrl.dismiss({
      'index': index
    });
  }

  // Close without a selected index
  close() {
    this.modalCtrl.dismiss();
  }

  filterItems(searchTerm: string, items: any[]) {
    return items.filter(item => {
      return item.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  filter(searchTerm: string) {
    return this.filterItems(searchTerm, this.list);
  }

  searchChanged() {
    this.filteredList = this.filter(this.searchText);
  }
}
