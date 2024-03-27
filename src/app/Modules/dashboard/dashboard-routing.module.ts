import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authenticationGuard } from 'src/app/Guards/authentication.guard';
import { DashboardPageComponent } from './Dashboard-Page/Dashboard-Page.component';
import { UsersComponent } from './Users/Users.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    // canActivate: [authenticationGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard-page',
        pathMatch: 'full',
      },
      {
        path: 'dashboard-page',
        component: DashboardPageComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
