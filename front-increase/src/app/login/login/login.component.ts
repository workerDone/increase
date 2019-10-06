import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ApiService } from 'src/app/core/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      firstName: [''],
      lastName: ['']
    });
  }

  isValid( name: string ): boolean {
    let control = null;
    if (this.loginForm) {
      control = this.loginForm.get(name);
    }
    if (control) {
      return control.valid || !control.touched;
    } else {
      return true;
    }
  }
}
