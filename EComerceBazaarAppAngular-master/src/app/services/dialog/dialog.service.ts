import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog'


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private _dialog: MatDialog) {
  }
  
  show<T>(dialogComponent: any, options?: MatDialogConfig): T {
    return this._dialog.open<T>(dialogComponent, options).componentInstance;
  }


}
