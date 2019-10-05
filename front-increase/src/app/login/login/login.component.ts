import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/core/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  getUserById() {
    this.apiService.get('user/1').subscribe((e)=> console.log(e, 333333333))
  }
}
