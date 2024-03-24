import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/Interfaces/Users';
import { DialogAnimationsExampleDialog } from './dialog-animation-example-dialog';

function createNewUser(id: number): User {
  const name =
    UsersComponent.NAMES[
      Math.round(Math.random() * (UsersComponent.NAMES.length - 1))
    ] +
    ' ' +
    UsersComponent.NAMES[
      Math.round(Math.random() * (UsersComponent.NAMES.length - 1))
    ].charAt(0) +
    '.';

  // return {
  //   id: id.toString(),
  //   name,
  //   //progress: Math.round(Math.random() * 100).toString(),
  //   // fruit:
  //   //   UsersComponent.FRUITS[
  //   //     Math.round(Math.random() * (UsersComponent.FRUITS.length - 1))
  //   //   ],
  // };
  return {
    id: id.toString(),
    name,
    email: '2QXeO@example.com',
    photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  };
}

@Component({
  selector: 'app-Users',
  templateUrl: './Users.component.html',
  styleUrls: ['./Users.component.css'],
})
export class UsersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'photo', 'name', 'email', 'actions'];

  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  static NAMES: string[] = [
    'Maia',
    'Asher',
    'Olivia',
    'Atticus',
    'Amelia',
    'Jack',
    'Charlotte',
    'Theodore',
    'Isla',
    'Oliver',
    'Isabella',
    'Jasper',
    'Cora',
    'Levi',
    'Violet',
    'Arthur',
    'Mia',
    'Thomas',
    'Elizabeth',
  ];

  viewUser(user: User) {
    // Code to view the user
  }

  editUser(user: User) {
    // Code to edit the user
  }

  deleteUser(user: User) {
    // Code to delete the user
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '800px',
      height: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  constructor(private dialog: MatDialog) {
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
