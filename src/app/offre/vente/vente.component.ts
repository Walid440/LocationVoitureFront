import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaiementComponent } from 'src/app/paiement/paiement.component';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent {
  constructor(private dial:MatDialog){}


  open(){ this.dial.closeAll();
    this.dial.open(PaiementComponent,{
      width:'400px',
      height:'370px'
    });
  
  }
}
