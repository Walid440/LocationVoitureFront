import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-decote-voiture',
  templateUrl: './decote-voiture.component.html',
  styleUrls: ['./decote-voiture.component.css']
})
export class DecoteVoitureComponent implements OnInit {
  prix:any;
  circulation:any;
  km:any;
constructor(private dial:MatDialog,private fb:FormBuilder){}
  ngOnInit(): void {
this.form = this.fb.group({
  prix:this.fb.control(""),
  km:this.fb.control(""),
  circulation:this.fb.control(new Date()),
  typeCarburant:this.fb.control("")

})
  }
 form!:FormGroup;
 
  
 IsLoading:boolean=false;
    estimatedCost: any;
  
    calculateEstimatedCost(): void {
      this.estimatedCost = "";
      this.IsLoading = true;
    
      setTimeout(() => {
        this.IsLoading = false;
    
        const baseCost = this.form.value.prix;
    
        let circ = this.form.value.circulation.split('-');
        const formattedDate = new Date(`${circ[0]}-${circ[1]}-${circ[1]}`);
        const age = (new Date().getFullYear() - formattedDate.getFullYear()) || 1;
        let mileageFactor = Math.max(1 - (age * 0.1), 0.5);
    
        const km = parseFloat(this.form.value.km) || 0;
        if (km > 50000) {
          mileageFactor -= 0.1;
        }
    
        const puissance = parseFloat(this.form.value.puissance) || 0;
        const nombrePortes = parseFloat(this.form.value.nombrePortes) || 0;
        const typeCarburant = this.form.value.typeCarburant; // Ajout du type de carburant
    
        // Adjust mileageFactor based on additional factors
        mileageFactor -= puissance * 0.01; // Adjust based on puissance
        mileageFactor -= nombrePortes * 0.005; // Adjust based on nombrePortes
    
        // Add adjustment based on typeCarburant
        const fuelTypeAdjustment = typeCarburant === 'essence' ? 0.01 : -0.02;
        mileageFactor += fuelTypeAdjustment;
    
        this.estimatedCost = (baseCost * mileageFactor) + (km * 0.01); // Adjusted formula
      }, 1000);
    }
    

  

    close(){
      this.dial.closeAll();
    }
  
  
 
   
   
  
  
  
  
  
}
