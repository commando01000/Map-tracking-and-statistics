import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.html',
  styleUrls: ['./dialog-animations-example-dialog.css'],
})
export class DialogAnimationsExampleDialog {
  hide: boolean = true;
  value!: string;
  constructor(
    public MatDialogRef: MatDialogRef<DialogAnimationsExampleDialog>
  ) {}

  ngOnInit(): void {}
}
