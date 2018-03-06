import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Contact } from '../../models/contact';
import { Contacts } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-contact-list',
  templateUrl: 'contact-list.html'
})

export class ContactListPage {
  location: any;
  tempContacts: Contact[];
  currentItems: Contact[] = [];

  constructor(public navCtrl: NavController, navParams: NavParams, public contacts: Contacts, public modalCtrl: ModalController) {
    this.location = navParams.get('location');
    this.tempContacts = this.contacts.query();

    for (var contact of this.tempContacts) {
      if (this.location.id == contact.location_id)
        this.currentItems.push(contact);
    }

    // this.currentItems = this.contacts.query();
  }

  /**
   * The view loaded, let's query our contacts for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new contact. This shows our ItemCreatePage in a
   * modal and then adds the new contact to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(contact => {
      if (contact) {
        this.contacts.add(contact);
      }
    })
    addModal.present();
  }

  /**
   * Delete an contact from the list of contacts.
   */
  deleteItem(contact) {
    this.contacts.delete(contact);
  }

  /**
   * Navigate to the detail page for this contact.
   */
  openItem(contact: Contact) {
    this.navCtrl.push('ItemDetailPage', {
      contact: contact
    });
  }
}
