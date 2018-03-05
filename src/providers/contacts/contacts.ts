import { Injectable } from '@angular/core';

import { Contact } from '../../models/contact';
import { Api } from '../api/api';

@Injectable()
export class Contacts {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/contacts', params);
  }

  add(contact: Contact) {
  }

  delete(contact: Contact) {
  }

}
