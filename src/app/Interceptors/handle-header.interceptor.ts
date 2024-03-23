import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HandleHeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'AIzaSyBsIDV4eowL9WB67TtqWx4KAPRF3K-cJgQ';

    // Clone the request and set the Authorization header using setHeaders
    const authReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
        'Content-Type': 'application/json' // You can set other headers as well
      }
    });

    return next.handle(authReq);
  }
}
