import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ApiService } from '../core/service/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registration = {
    firstName: null,
    lastName: null
  };
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {

  }

}
