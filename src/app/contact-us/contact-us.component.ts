import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  constructor(  public dialog: MatDialog)
  {}
     ngOnInit(): void {
       
     }
     Annuler(){
      this.dialog.closeAll();
     }
}
