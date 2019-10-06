import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DxNumberBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    DxNumberBoxModule,
    DxTextBoxModule,
  ]
})
export class LoginModule { }
