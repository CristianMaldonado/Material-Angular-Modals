import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  dialogResult = '';
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '600px',
      data: 'Este texto es pasado por el dialog'
    });

    dialogRef.afterClosed().subscribe(
      result => {
        console.log(`Dialog cerrado: ${result}`);
        this.dialogResult = result;
      }
    );
  }

}
