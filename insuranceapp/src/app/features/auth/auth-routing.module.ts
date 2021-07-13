import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';

const routes: Route[] = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
