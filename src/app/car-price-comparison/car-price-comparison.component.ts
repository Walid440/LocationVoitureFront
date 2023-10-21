import { Component, OnInit } from '@angular/core';
import { IzomocarService } from '../services/izomocar.service';
import { IzmoCarService } from '../services/izomocar.service.spec';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-car-price-comparison',
  templateUrl: './car-price-comparison.component.html',
  styleUrls: ['./car-price-comparison.component.css']
})
export class CarPriceComparisonComponent implements OnInit {  
  form!:FormGroup; 
  constructor(private chatGptService: IzmoCarService,private http:HttpClient,private fb:FormBuilder ) {}
  Annee:any;
  model:any;
  porte:any;
  km:any; 
  date:any;
  Puissance:any;
  ngOnInit(): void {

    
    this.form = this.fb.group({
       Annee:this.fb.control(""),
       model:this.fb.control(""),
       porte:this.fb.control(""),
       km:this.fb.control(""),
       date:this.fb.control(""),
       Puissance:this.fb.control("")

 })
  }

  
    messages= [
      {"role": "system", "content": "You are a helpful assistant."}    ]
  

  car1Features = '';
  car2Features = '';
  comparisonResult :any;
 resultat="";

  compareCars() {
    this.resultat="j'aimerais obtenir une estimation du cout d'une voiture d'occasion que je souhaite acheter aidez-moi svp? une seul reponse approximative avec seulement valeur sous cette forme prix:  avec ces carcateristique suivant voiture model"+this.form.value.model+"Annee de fabrication"+this.form.value.Annee+" nombre de porte"+this.form.value.porte+"km"+this.form.value.km+"date de mise en circulation"+this.form.value.date+"puissance"+this.form.value.Puissance;

      let apiUrl = "https://api.openai.com/v1/chat/completions"; 
      let header=new HttpHeaders().set("Authorization","Bearer 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");
      this.messages.push({role:"user",content:this.resultat})
      
      let payload={
        model:"gpt-3.5-turbo",
        messages:this.messages
      }
      this.http.post(apiUrl,payload,{headers:header}).subscribe(res=>{
        this.comparisonResult=res;
        console.log(this.form.value.model);
      });
     
  }



}

