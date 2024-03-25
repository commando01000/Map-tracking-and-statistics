import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/Authentication/Authentication.service';
@Component({
  // Component decorator that defines metadata for the SignInComponent
  selector: 'app-Sign-In', // The CSS selector that represents this component
  templateUrl: './Sign-In.component.html', // The location of the component's template file
  styleUrls: ['./Sign-In.component.css'], // The location of the component's private CSS styles
})
export class SignInComponent implements OnInit {
  isLoading: boolean = false; // Flag to indicate if the login process is ongoing
  errorMsg!: string; // Variable to store error messages that may occur during login
  hide: boolean = true; // Flag to toggle visibility of the password in the template

  // Constructor to inject dependencies
  constructor(
    private _AuthService: AuthenticationService,
    private _Route: Router
  ) {}

  // Lifecycle hook that is called after data-bound properties are initialized
  ngOnInit() {}

  // Definition of the login form with its form controls and validations
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        // Regex pattern for password validation
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
  });

  // Method to handle form submission
  onSubmit(loginForm: any) {
    this.isLoading = true; // Set loading to true as login process starts
    if (loginForm.valid) {
      // Check if the form is valid
      // Call the AuthenticationService to validate the user
      this._AuthService.validateUser(loginForm.value).subscribe({
        next: (response) => {
          console.log(response); // Log the response from the server
          this._Route.navigate(['/dashboard']); // Navigate to dashboard on success
        },
        error: (err) => {
          this.errorMsg = err.message; // Store the error message
          console.log(this.errorMsg); // Log the error message
          this._Route.navigate(['/dashboard']); // Navigate to dashboard even on error (?)
          this.isLoading = false; // Set loading to false as login process ends
        },
        complete: () => {
          this.isLoading = false; // Set loading to false as login process ends
          // The commented out navigation implies it was considered to be placed here instead
          // this._Route.navigate(['/dashboard']);
        },
      });
    }
  }
}
