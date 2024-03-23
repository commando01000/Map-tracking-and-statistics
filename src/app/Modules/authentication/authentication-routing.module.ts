import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Sign-In/Sign-In.component';
import { SignUpComponent } from './Sign-Up/Sign-Up.component';
import { authenticationGuard } from 'src/app/Guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [authenticationGuard],
    pathMatch: 'full',
    component: SignInComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
