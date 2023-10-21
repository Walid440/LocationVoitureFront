import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(private dial:MatDialog){}
Annuler(){

this.dial.closeAll();

}
}
