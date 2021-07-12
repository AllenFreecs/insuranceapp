import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { InsuranceAddEditComponent } from './Insurance/insurance-add-edit/insurance-add-edit.component';
import { InsuranceComponent } from './insurance/insurance.component';

const routes: Route[] = [
  { path: 'dashboard/insurance', component: InsuranceComponent },
  { path: 'dashboard/insurance/:id', component: InsuranceAddEditComponent },
  { path: 'dashboard/insurance/Add', component: InsuranceAddEditComponent },
  { path: 'dashboard/insurancesetup', component: InsuranceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
