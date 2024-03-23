import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './Dashboard-Page/Dashboard-Page.component';
import { SideNavbarComponent } from './SideNavbar/SideNavbar.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { UsersComponent } from './Users/Users.component';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [
    DashboardPageComponent,
    SideNavbarComponent,
    NavbarComponent,
    UsersComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, NgApexchartsModule],
})
export class DashboardModule {}
