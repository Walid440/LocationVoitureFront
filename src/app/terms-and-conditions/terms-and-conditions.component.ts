import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent implements OnInit {
  constructor(  public dialog: MatDialog)
  {}
     ngOnInit(): void {
       
     }
     Annuler(){
      this.dialog.closeAll();
     }
}
