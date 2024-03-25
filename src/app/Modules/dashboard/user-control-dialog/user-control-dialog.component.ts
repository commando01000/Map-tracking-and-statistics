import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'user-control-dialog',
  templateUrl: './user-control-dialog.component.html',
  styleUrls: ['./user-control-dialog.component.css'],
})
export class UserControlDialogComponent {
  hide: boolean = true;
  value!: string;
  constructor(public MatDialogRef: MatDialogRef<UserControlDialogComponent>) {}

  ngOnInit(): void {}

  displaySelectedImage(event: any, elementId: any) {
    const selectedImage: any = document.getElementById(elementId);
    const fileInput = event.target;
  
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
  
      reader.onload = function (e: any) {
        selectedImage.src = e.target.result;
      };
  
      reader.readAsDataURL(fileInput.files[0]);
    }
  }
}
