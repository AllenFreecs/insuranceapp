import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InsuranceComponent } from './insurance/insurance.component';
import { InsuranceAddEditComponent } from './Insurance/insurance-add-edit/insurance-add-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InsuranceFilterComponent } from './insurance/insurance-filter/insurance-filter.component';
import { InsurancesetupComponent } from './insurancesetup/insurancesetup.component';


@NgModule({
  declarations: [
    InsuranceComponent,
    InsuranceAddEditComponent,
    InsuranceFilterComponent,
    InsurancesetupComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
