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
  ngOnInit(): void {
    this.form = this.fb.group({
       car1Features:this.fb.control(""),
       car2Features:this.fb.control("")


 })
  }

  
    messages= [
      {"role": "system", "content": "You are a helpful assistant."}    ]
  

  car1Features = '';
  car2Features = '';
  comparisonResult :any;
 

  compareCars() {
    
      let apiUrl = "https://api.openai.com/v1/chat/completions"; 
      let header=new HttpHeaders().set("Authorization","Bearer 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");
      this.messages.push({role:"user",content:this.form.value.car2Features})
      
      let payload={
        model:"gpt-3.5-turbo",
        messages:this.messages
      }
      this.http.post(apiUrl,payload,{headers:header}).subscribe(res=>{

        this.comparisonResult=res;
        console.log(res);
      });
     
  }



}

