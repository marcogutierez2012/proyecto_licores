import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActualizarlicorComponent } from '../actualizarlicor/actualizarlicor.component';

@Component({
  selector: 'app-listarlicor',
  templateUrl: './listarlicor.component.html',
  styleUrl: './listarlicor.component.css'
})
export class ListarlicorComponent {

  constructor(private snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  actualizarLicor(): void {
    const dialogRef = this.dialog.open(ActualizarlicorComponent, {
      width: '400px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
