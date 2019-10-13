import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DxNumberBoxModule, DxTextBoxModule, DxListModule, DxFormModule, DxRadioGroupModule, DxButtonModule } from 'devextreme-angular';

import { UserComponent } from './user.component';
import { UserApiService } from './service/user-api.service';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [UserComponent],
  providers: [UserApiService],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    DxNumberBoxModule,
    DxTextBoxModule,
    DxListModule,
    DxFormModule,
    FormsModule,
    DxRadioGroupModule,
    DxButtonModule,
  ]
})
export class UserModule { }
