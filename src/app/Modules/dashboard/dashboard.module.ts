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
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogAnimationsExampleDialog } from './Users/dialog-animation-example-dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardPageComponent,
    SideNavbarComponent,
    NavbarComponent,
    UsersComponent,
    DialogAnimationsExampleDialog,
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
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
  ],
})
export class DashboardModule {}
