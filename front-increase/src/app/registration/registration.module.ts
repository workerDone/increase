import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DxNumberBoxModule, DxTextBoxModule, DxListModule, DxFormModule } from 'devextreme-angular';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { RegistrationApiService } from './service/registration-api.service';

@NgModule({
  declarations: [RegistrationComponent],
  providers: [RegistrationApiService],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    DxNumberBoxModule,
    DxTextBoxModule,
    DxListModule,
    DxFormModule,
    FormsModule,
  ]
})
export class RegistrationModule { }
