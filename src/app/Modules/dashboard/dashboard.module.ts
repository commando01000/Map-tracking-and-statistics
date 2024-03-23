import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './Dashboard-Page/Dashboard-Page.component';
import { SideNavbarComponent } from './SideNavbar/SideNavbar.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { UsersComponent } from './Users/Users.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    DashboardPageComponent,
    SideNavbarComponent,
    NavbarComponent,
    UsersComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class DashboardModule {}
