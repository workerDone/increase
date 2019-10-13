import { Component, OnInit } from '@angular/core';

import { UserApiService } from './service/user-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  registration = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirm: null,
  };

  constructor(
    private userApiService: UserApiService,
  ) { }

  ngOnInit() { }

  submitForm(event: any) {
    console.log(this.registration, event)
  }
}
