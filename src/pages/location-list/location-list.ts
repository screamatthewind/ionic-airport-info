import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Location } from '../../models/location';
import { Locations } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-location-list',
  templateUrl: 'location-list.html'
})

export class LocationListPage {
  currentItems: Location[];

  constructor(public navCtrl: NavController, public locations: Locations, public modalCtrl: ModalController) {
    this.currentItems = this.locations.query();
  }

  /**
   * The view loaded, let's query our locations for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new location. This shows our ItemCreatePage in a
   * modal and then adds the new location to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(location => {
      if (location) {
        this.locations.add(location);
      }
    })
    addModal.present();
  }

  /**
   * Delete an location from the list of locations.
   */
  deleteItem(location) {
    this.locations.delete(location);
  }

  /**
   * Navigate to the detail page for this location.
   */
  openItem(location: Location) {
    this.navCtrl.push('ItemDetailPage', {
      location: location
    });
  }
}
