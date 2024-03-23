import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private _http: HttpClient) {}

  validateUser(loginForm: any): Observable<any> {
    console.log(loginForm);
    return this._http.post(
      `https://fronttest.wabcgroup.com/api/Auth/login`,
      loginForm
    );
  }
}
