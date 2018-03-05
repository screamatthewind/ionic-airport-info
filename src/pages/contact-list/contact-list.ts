import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Contact } from '../../models/contact';
import { Contacts } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-contact-list',
  templateUrl: 'contact-list.html'
})

export class ContactListPage {
  item: any;
  currentItems: Contact[];

  constructor(public navCtrl: NavController, public contacts: Contacts, public modalCtrl: ModalController) {
    this.currentItems = this.contacts.query();
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
