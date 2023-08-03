import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaiementComponent } from 'src/app/paiement/paiement.component';
 

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent  implements OnInit {
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
