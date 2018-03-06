import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Locations } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-location-detail',
  templateUrl: 'location-detail.html',
})
export class LocationDetailPage {

  location: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, locations: Locations) {
    this.location = navParams.get('location') 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationDetailPage');
  }

}
