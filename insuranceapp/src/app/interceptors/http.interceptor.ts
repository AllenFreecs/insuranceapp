import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) { }
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const Authorization = 'Bearer ' + this.cookieService.get('Auth');
    return next.handle(httpRequest.clone({ setHeaders: { Authorization } }));
  }
}