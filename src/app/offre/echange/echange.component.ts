import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaiementComponent } from 'src/app/paiement/paiement.component';

@Component({
  selector: 'app-echange',
  templateUrl: './echange.component.html',
  styleUrls: ['./echange.component.css']
})
export class EchangeComponent implements OnInit {
  ngOnInit(): void {
  
  }
  constructor(private dial:MatDialog){}

  open(){ this.dial.closeAll();
    this.dial.open(PaiementComponent,{
      width:'400px',
      height:'370px'
    });
  
  }
  closeCompose(){
    this.dial.closeAll();
  }
}
