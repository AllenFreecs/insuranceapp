import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth.guard';
import { InsuranceAddEditComponent } from './Insurance/insurance-add-edit/insurance-add-edit.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { InsurancesetupComponent } from './insurancesetup/insurancesetup.component';

const routes: Route[] = [
  { path: 'dashboard/insurance', canActivate: [AuthGuard], component: InsuranceComponent },
  { path: 'dashboard/insurance/:id',canActivate: [AuthGuard], component: InsuranceAddEditComponent },
  { path: 'dashboard/insurance/Add', canActivate: [AuthGuard], component: InsuranceAddEditComponent },
  { path: 'dashboard/insurancesetup', canActivate: [AuthGuard], component: InsurancesetupComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
