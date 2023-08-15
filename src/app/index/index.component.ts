import { Component, OnInit,Renderer2, ViewChild  } from '@angular/core';
import { ReservationComponent } from '../reservation/reservation.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
 
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
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 
import { MatSnackBar } from '@angular/material/snack-bar'; // Importez le service
import { CommentService } from '../services/comment.service';
import { comment } from '../Model/Comment';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import Swal from 'sweetalert2';
 


 
 

declare const myFunction: any;

 
export interface Rating {
  value: number;
}
 
 @Component({
  selector: 'app-index',
  templateUrl: './index.component.html', 
  styleUrls: ['./index.component.css'],
 
   
})
export class IndexComponent implements OnInit{
myscriptElemnt!:HTMLScriptElement;
DateAujou:any;
Comm:comment=new comment();
star:number[]=[5,4,2,3,1];

@ViewChild('slik') slickModal!: SlickCarouselComponent ;

response = [
  '',
  'Very unsatisfied',
  'Neutral',
  'Satisfied',
  'Very Satisfied'
]
resp=[0,1,2,3,4,5];
   hoveredComment: any;
getStarArray(value: number): number[] {
  return Array(value).fill(0);
}
userlist!:any;
username: string = '';
commenTex:string='';
star1:number=0;
star2:number=0;
star3:number=0;
star4:number=0;
star5:number=0;

 ratingForm!: FormGroup ;
  constructor(public comService : CommentService,private snackbar:MatSnackBar,private fb: FormBuilder,private renderer: Renderer2,private dial:MatDialog,private offre:OffresService,private rout:Router)  
      {
        this.myscriptElemnt=document.createElement("script");
        this.myscriptElemnt.src="src/assets/chat.js";
        document.body.appendChild(this.myscriptElemnt);

      }

  
    
  
    
    
    
    
  pers!:offre;
  isHidden: boolean = false;
  rate:number=0;
  isHidden2: boolean = false;
  listOffre:any;
  id!:number;
  isHidden3: boolean = true; 
  isBackgroundActive: boolean = false;
     ngOnInit(): void {

      this.ratingForm = this.fb.group({
        username:new FormControl(),
       commentText:new FormControl(),
       star1:new FormControl(),
       star2:new FormControl(),
       star3:new FormControl(),
       star4:new FormControl(),
       star5:new FormControl(),
  
   });
     this.getAllComments();

      this.DateCommentaire();

      this.ratingForm = this.fb.group({
        rating: ['rating'], // Contrôle pour le bouton radio
      });
       this.getAllOffre();

this.rating(this.id);




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
  
  
  
  getAllComments(){
    this.comService.getAll().subscribe(response => {
      this.userlist = response;
      console.log("resss"+this.userlist)
     
    });
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
 
  carouselConfig2 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
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
    width:'500px',
    height:'400'
  });
}
 
 




DateCommentaire()
{
  const currentDate = new Date();
  this.DateAujou=currentDate.toLocaleDateString();
  
}
rat = 0;
returnStar(i: number) {
  if (this.rat >= i + 1) {
    return 'star';
  } else {
    return 'star_border';
  }
}

rating(i :number){
 
let y:any;
 
this.snackbar.open(this.response[i], '', {
   panelClass: ['snack-bar']
});
   this.rate=this.resp[i];

 

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

navigatePrev() {
  this.slickModal.slickPrev();
}

navigateNext() {
  this.slickModal.slickNext();
}

AddCom(){
 
  this.Comm.rating=this.rate;
    this.Comm.commentText=this.commenTex;
    this.Comm.username=this.username;
    if(this.rate==null)
    {
      Swal.fire("Selectionner rate!!")
    }else if(this.username=="")
    {
      Swal.fire("veuillez saisir un username")
    }
    else if(this.commenTex=="")
    {
      Swal.fire("veuillez saisir un commentaire")
    }
    
    else{
  this.comService.AddComment(this.Comm).subscribe();
  Swal.fire("Element ajouté avec sucées !!!")
  
     }
}
}
