import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/Authentication/Authentication.service';
@Component({
  selector: 'app-Sign-In',
  templateUrl: './Sign-In.component.html',
  styleUrls: ['./Sign-In.component.css'],
})
export class SignInComponent implements OnInit {
  isLoading: boolean = false;
  errorMsg!: string;
  hide: boolean = true;
  constructor(private _AuthService: AuthenticationService, private _Route:Router) {}

  ngOnInit() {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
  });
  onSubmit(loginForm: any) {
    this.isLoading = true;
    if (loginForm.valid) {
      this._AuthService.validateUser(loginForm.value).subscribe({
        next: (response) => {
          console.log(response);
          this._Route.navigate(['/dashboard']);
        },
        error: (err) => {
          this.errorMsg = err.message;
          console.log(this.errorMsg);
          this._Route.navigate(['/dashboard']);
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
          // this._Route.navigate(['/dashboard']);
        },
      });
    }
  }
}
