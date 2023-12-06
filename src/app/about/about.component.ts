import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
 @Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(  public dialog: MatDialog)
{}
   ngOnInit(): void {
     
   }
   Annuler(){
    this.dialog.closeAll();
   }
}
