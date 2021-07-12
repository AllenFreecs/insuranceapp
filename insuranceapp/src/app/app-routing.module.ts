import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const routes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
