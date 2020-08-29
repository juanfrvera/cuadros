import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-varilla-modal',
  templateUrl: './varilla-modal.page.html',
  styleUrls: ['./varilla-modal.page.scss'],
})
export class VarillaModalPage implements OnInit {
  searchText: string = "";
  list: Varilla[] = [
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
  filteredList: string[];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.filteredList = this.list;
  }

  clickVarilla(index: number) {
    // Close this modal and pass the selected varilla
    this.modalCtrl.dismiss({
      'index': index
    });
  }

  // Close without a selected varilla
  close() {
    this.modalCtrl.dismiss();
  }

  filterItems(searchTerm: string, items: any[]) {
    return items.filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  filterVarillas(searchTerm: string) {
    return this.filterItems(searchTerm, this.list);
  }

  searchChanged() {
    this.filteredList = this.filterVarillas(this.searchText);
  }
}
