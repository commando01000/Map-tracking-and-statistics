import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('selectedImage', { static: false })
  selectedImage!: ElementRef<HTMLImageElement>;

  displaySelectedImage(event: any) {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        // console.log(e.target.result);

        this.selectedImage.nativeElement.src = e.target.result;
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  }
}
