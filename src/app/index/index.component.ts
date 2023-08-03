import { Component, OnInit,Renderer2  } from '@angular/core';
import { ReservationComponent } from '../reservation/reservation.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { FrontsComponent } from '../fronts/fronts.component';
 
import { BookComponent } from '../book/book.component';
import { OffresService } from '../services/offres.service';
import { ProduitComponent } from '../produit/produit.component';
import { LocationComponent } from '../offre/location/location.component';
import { offre } from '../Model/offre';
import { VenteComponent } from '../offre/vente/vente.component';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { EchangeComponent } from '../offre/echange/echange.component';
import { ChatbotComponent } from '../chatbot/chatbot.component';
 

declare const myFunction: any;
 
 
 @Component({
  selector: 'app-index',
  templateUrl: './index.component.html', 
  styleUrls: ['./index.component.css'],
 
   
})
export class IndexComponent implements OnInit{
myscriptElemnt!:HTMLScriptElement;

 
  constructor(private renderer: Renderer2,private dial:MatDialog,private offre:OffresService,private rout:Router)  
      {
        this.myscriptElemnt=document.createElement("script");
        this.myscriptElemnt.src="src/assets/chat.js";
        document.body.appendChild(this.myscriptElemnt);

      }
  pers!:offre;
  isHidden: boolean = false;
  isHidden2: boolean = false;
listOffre:any;
id!:number;


    ngOnInit(): void {
       this.getAllOffre();


       this.loadScript('assets/chat.js').then(() => {
      // Script has been loaded and executed.
      // Now you can safely call the JavaScript function.
      this.callCustomFunction();
    });
     }
     loadScript(scriptUrl: string): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        const scriptElement = this.renderer.createElement('script');
        scriptElement.src = scriptUrl;
        scriptElement.onload = () => {
          resolve();
        };
        scriptElement.onerror = () => {
          reject(new Error(`Error loading script: ${scriptUrl}`));
        };
        this.renderer.appendChild(document.body, scriptElement);
      });
    }
  
    callCustomFunction() {
      // Now that the script is loaded, you can call the JavaScript function.
      (window as any).myFunction();
    }
  
  
  
  
  
  
     
    
  c(){

   
    if(this.isHidden=true)
    {
      this.isHidden=false;
    }
   
  }

  
  closeCompose(){
    this.isHidden=true;  }
  slides = [
    {img: "assets/car-1.jpg"},
    {img: "assets/car-2.jpg"},
    {img: "assets/car-3.jpg"},
    {img: "assets/car-4.jpg"}
  ];
  carouselConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true
  };
 

  selectedElement: string | null = null;

   
  open(i: number,s:any,event:any){


    this.selectedElement = s;
   
     if(   this.selectedElement =="location.png")
  {

    this.dial.open(LocationComponent,{
      width:'600px',
      height:'400px'
    });
   
  }
else   if(   this.selectedElement =="vente.png")
  {

    this.dial.open(VenteComponent,{
      width:'600px',
      height:'370px'
    });
   
  }
  else   if(   this.selectedElement =="echange.png")
  {

    this.dial.open(EchangeComponent,{
      width:'600px',
      height:'470px'
    });
   
  }
}
  
  result:any;
getAllOffre(){

  this.offre.getAll().subscribe(res=>{


this.listOffre=res;

   
console.log("res"+this.listOffre['photo2'])

  
 
  });
}
detail(){
  this.dial.open(ChatbotComponent,{
    width:'550px',
    height:'350px'
  });
}
/*sendMessage() {
  if (this.userMessage.trim() === '') return;

  this.messages.push({ content: this.userMessage, fromUser: true });
  this.userMessage = '';

  const responses = [
    'Bonjour ! Comment puis-je vous aider ?',
    'Je suis un chatbot en construction. Veuillez m\'excuser pour mes limites actuelles.',
    'Désolé, je ne comprends pas encore cette commande.',
    // Ajoutez d'autres réponses ici
  ];

  const randomIndex = Math.floor(Math.random() * responses.length);
  const botResponse = responses[randomIndex];
  this.messages.push({ content: botResponse, fromUser: false });
}*/
}
