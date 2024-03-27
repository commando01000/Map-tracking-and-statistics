import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Sign-In/Sign-In.component';
import { SignUpComponent } from './Sign-Up/Sign-Up.component';
import { AuthenticationLayoutComponent } from './authentication-layout/authentication-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full',
      },
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
