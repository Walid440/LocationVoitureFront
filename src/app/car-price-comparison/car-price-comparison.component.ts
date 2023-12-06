import { Component, OnInit } from '@angular/core';
import { IzomocarService } from '../services/izomocar.service';
import { IzmoCarService } from '../services/izomocar.service.spec';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CalendrierService } from '../services/calendrier.service';

@Component({
  selector: 'app-car-price-comparison',
  templateUrl: './car-price-comparison.component.html',
  styleUrls: ['./car-price-comparison.component.css']
})
export class CarPriceComparisonComponent implements OnInit {  
  form!:FormGroup; 
  constructor(private chatService: CalendrierService,private chatGptService: IzmoCarService,private http:HttpClient,private fb:FormBuilder ) {}
  Annee:any;
  model:any;
  porte:any;
  km:any; 
  date:any;
  Puissance:any; 
    DELAY_IN_MS = 500; 
  ngOnInit(): void {

    
    this.form = this.fb.group({
       Annee:this.fb.control(""),
       model:this.fb.control(""),
       porte:this.fb.control(""),
       km:this.fb.control(""),
       date:this.fb.control(""),
       Puissance:this.fb.control("")

 })
 this.sendMessage()
  }

 // Adjust the delay as needed

    messages= [
      {"role": "system", "content": "You are a helpful assistant."}    ]
  

  car1Features = '';
  car2Features = '';
  comparisonResult :any;
 resultat="";

 
  retries = 0;
 
 
 

 
 
 
  userMessage: string = '';
  chatHistory: any[] = [];

 
  private apiUrl = 'http://localhost:3000'; 
   

  sendMessage() {
    if (this.userMessage.trim() === '') {
      return;
    }

    // Ajoutez le message de l'utilisateur à l'historique
    this.chatHistory.push({ role: 'user', content: this.userMessage });

    // Appelez le service pour obtenir la réponse de ChatGPT
    this.chatService.getChatResponse(this.userMessage).subscribe(
      (response) => {
        // Ajoutez la réponse à l'historique
        this.chatHistory.push({ role: 'chatbot', content: response.message });

        // Réinitialisez le champ de saisie
        this.userMessage = '';
      },
      (error) => {
        console.error('Erreur lors de la demande à l\'API ChatGPT:', error);
      }
    );
  }

}  