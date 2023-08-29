import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-decote-voiture',
  templateUrl: './decote-voiture.component.html',
  styleUrls: ['./decote-voiture.component.css']
})
export class DecoteVoitureComponent implements OnInit {
  prix:any;
  circulation:any;
constructor(private fb:FormBuilder){}
  ngOnInit(): void {
this.form = this.fb.group({
  prix:this.fb.control(""),
  circulation:this.fb.control(new Date())


})
  }
 form!:FormGroup;
 
  
 IsLoading:boolean=false;
    estimatedCost: any;
  
    calculateEstimatedCost(): void {
      // Calcul simplifié basé sur des valeurs arbitraires
    
      this.estimatedCost ="";
  
      this.IsLoading=true;

      setTimeout(()=>{    
        this.IsLoading=false;
        const baseCost = this.form.value.prix;

        let circ=this.form.value.circulation.split('-');
  
         const formattedDate = new Date(`${circ[0]}-${circ[1]}-${circ[1]}`);
         const age = (new Date().getFullYear() - formattedDate.getFullYear()) || 1;
        const mileageFactor = Math.max(1 - (age * 0.1), 0.5);
     
        this.estimatedCost = baseCost * mileageFactor;
       },1000);
         
    }
  

 
  
  
 
   
   
  
  
  
  
  
}