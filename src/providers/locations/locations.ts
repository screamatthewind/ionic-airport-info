import { Injectable } from '@angular/core';

import { Location } from '../../models/location';
import { Api } from '../api/api';

@Injectable()
export class Locations {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/locations', params);
  }

  add(location: Location) {
  }

  delete(location: Location) {
  }

}
