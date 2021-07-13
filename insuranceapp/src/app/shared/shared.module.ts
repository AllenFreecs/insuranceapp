import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { HeaderInterceptor } from '../interceptors/http.interceptor';
import { HeartbeatComponent } from './heartbeat/heartbeat.component';
import { NavComponent } from './nav/nav.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PagerComponent } from './pager/pager.component';
import { CurrencyComponent } from './controls/currency/currency.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeartbeatComponent,
    NavComponent,
    SpinnerComponent,
    PagerComponent,
    CurrencyComponent
  ],
  declarations: [
    HeartbeatComponent,
    NavComponent,
    SpinnerComponent,
    PagerComponent,
    CurrencyComponent
  ],
  providers: [CookieService,{provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true}]
})
export class SharedModule { }