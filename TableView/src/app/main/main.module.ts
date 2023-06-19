import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainRoutingModule } from './main-routing.module';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule} from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import{NzInputModule} from 'ng-zorro-antd/input';

import{NzModalModule} from 'ng-zorro-antd/modal';
import{NzFormModule} from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { PhoneNumberPipePipe } from './pipes/phone-number-pipe.pipe';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RouterModule } from '@angular/router';
import { TripModule } from './components/trip/trip.module';





@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
    TableComponent,
    PhoneNumberPipePipe,
    RegisterComponent,
    LoginComponent,
  ],

  imports: [

    CommonModule,
    MainRoutingModule,
    RouterModule,
    TripModule,

    NzButtonModule,
    NzPageHeaderModule,
    NzTableModule,
    //NzIconModule,
    NzModalModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    FormsModule,
  ]
})
export class MainModule { }
