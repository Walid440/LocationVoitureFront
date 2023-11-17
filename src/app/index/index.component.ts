import { Component, ElementRef, HostListener, Inject, OnInit,Renderer2, ViewChild  } from '@angular/core';
import { ReservationComponent } from '../reservation/reservation.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
 
import { FrontsComponent } from '../fronts/fronts.component';
 
import { BookComponent } from '../book/book.component';
import { OffresService } from '../services/offres.service';
import { ProduitComponent } from '../produit/produit.component';
import { LocationComponent } from '../offre/location/location.component';
import { offre } from '../Model/offre';
import { VenteComponent } from '../offre/vente/vente.component';
import { ActivatedRoute, Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { EchangeComponent } from '../offre/echange/echange.component';
import { ChatbotComponent } from '../chatbot/chatbot.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MatSnackBar } from '@angular/material/snack-bar'; // Importez le service
import { CommentService } from '../services/comment.service';
import { comment } from '../Model/Comment';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import Swal from 'sweetalert2';
import { CalendarComponent } from '../calendar/calendar.component';
import { CarPriceComparisonComponent } from '../car-price-comparison/car-price-comparison.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DecoteVoitureComponent } from '../decote-voiture/decote-voiture.component';
 import { AuthLoginV2Component } from '../User/authentication/auth-login-v2/auth-login-v2.component';
import { AuthLoginComponent } from '../usr/auth-login/auth-login.component';
import { ServicesService } from '../services.service';
import { ResetPassComponent } from '../reset-pass/reset-pass.component';
 


 
 

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

  val:any;
  param:any;
Comm:comment=new comment();
star:number[]=[5,4,2,3,1];
locationForm!:FormGroup;
@ViewChild('slik') slickModal!: SlickCarouselComponent ;

response = [
  '',
  'TresUnsatisfait',
  'Neutre',
  'Satisfait',
  'TresSatisfait'
]
resp=[0,1,2,3,4];
   hoveredComment: any;
 getStarArray(value: number): number[] {
  
  return Array(value).fill(0);
}
userlist!:any;
userlist1!:any;

heure!:any;
username: string = '';
commenTex:string='';
star1:number=0;
star2:number=0;
star3:number=0;
star4:number=0;
star5:number=0;
ville:string='Select';
Resultat:any;
menu!:'Select Offre';
date!:string;
isHidden4: boolean = true;
loaders:boolean=true;
test!:string;
 ratingForm!: FormGroup ; ng:any;
  constructor(private route: ActivatedRoute,public authService: ServicesService,private modalService: NgbModal,private Route:ActivatedRoute,private el:ElementRef,private http:HttpClient,public comService : CommentService,private snackbar:MatSnackBar,private fb: FormBuilder,private renderer: Renderer2,private dial:MatDialog,private offre:OffresService,private rout:Router)  
      {
        this.myscriptElemnt=document.createElement("script");
        this.myscriptElemnt.src="src/assets/chat.js";
        document.body.appendChild(this.myscriptElemnt);

      }

  
    
  
    
    
    
  IsLoading:boolean=false;
  pers!:offre;
  isHidden: boolean = false;
  rate:number=0;
  isHidden2: boolean = false;
  listOffre:any;
  id!:number;
  isHidden3: boolean = true; 
  isBackgroundActive: boolean = false;
  ngValue: string | null = null;
  
user!: string;
idUser:any;rest:any;
     ngOnInit(): void {

     
    
      // Now 'ngValue' contains the value of the 'ng' parameter
     
      this.Route.queryParams.subscribe(params => {
        this.user =params['username'] ;
        this.idUser =params['id'] ;
        this.route.queryParams.subscribe(queryParams => {
          this.rest = queryParams['token']; // Assuming 'token' is the parameter name
       
 
        if (this.rest!=null) {
          
      
          this.dial.open(ResetPassComponent,{
            width:'800px',
            height:'400px',
           // Empêche la fermeture du modal lors d'un clic en dehors de celui-ci
    
           });
  
          }
        
      }); 
     
     });
       this.ratingForm = this.fb.group({
        username:new FormControl(),
       commentText:new FormControl(),
       star1:new FormControl(),
       star2:new FormControl(),
       star3:new FormControl(),
       star4:new FormControl(), 
       ville:new FormControl(),
       menu:new FormControl(),
       date:new FormControl()
  
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
  this.userlist1 = response;
  // Boucle à travers les éléments du tableau
  for (const comment of this.userlist1) {
    const ratingString = comment.rating as string; // Assurez-vous que comment.rating est de type string
    if (ratingString === "Neutre") {
      // Convertir "Neutre" en nombre en utilisant le tableau "response"
      this.val = 2;
     }
    
  }
});

  
}
 
 

// Add this method to check if the user is authenticated
isAuthenticated(): boolean {
  return this.authService.isAuthenticatedSubject.value;
}

   async logBody(){

  
  // Now 'ngValue' contains the value of the 'ng' parameter
   if(this.user==="")
{
      this.dial.open(BookComponent,{
        width:'800px',
        height:'400px',
        disableClose: true,  // Empêche la fermeture du modal lors d'un clic en dehors de celui-ci

       });
    }
    console.log("param"+this.param)
}
 
    logout(){
   var c=   this.rout.navigate(['/'], { queryParams: { username: '' } }); // Redirigez avec username vide

  
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

  
  open(i: number,s:any,id:any,prix:any,prod:any ,idUser:any,event:any){

 
    this.selectedElement = s;
    
     if(   this.selectedElement =="location.png")
  {

    this.dial.open(LocationComponent,{
      width:'600px',
      height:'400px',
     data: { prix: prix,id:id,prod:prod,idUser:this.idUser }
    });
   
  }
else   if(   this.selectedElement =="vente.png")
  {

    this.dial.open(VenteComponent,{
      width:'650px',
      height:'400px',
      data: { prix: prix,id:id,prod:prod,idUser:this.idUser }
        });
   
  }
  else   if(   this.selectedElement =="echange.png")
  {

    this.dial.open(EchangeComponent,{
      width:'600px',
      height:'470px',
      data: { prix: prix,id:id,prod:prod,idUser:this.idUser }
    });
   
  }
}
 

   
  result:any;
getAllOffre(  ){
   if (this.ville === 'Select') {
    this.offre.getAll().subscribe(res=>{
      

       this.listOffre=res;
       
      // console.log("res"+ this.listOffre);
        
    }); } else {
  
   
 
      this.offre.search(this.date,this.menu,this.ville).subscribe(res=>{
   this.listOffre=res;
   //console.log("rrrrrrr"+ this.listOffre)
      });
   

  

 

  }
}

 
detail(id:number){
  this.dial.open(ProduitComponent,{
    width:'500px',
    height:'400',
    data:{id:id}
  });
 }
 
 

 

DateCommentaire()
{
  const currentDate = new Date();
  this.DateAujou=currentDate.toLocaleDateString();
  
}
 

rating(i :number){
 
let y:any;
 
this.snackbar.open(this.response[i], '', {
   panelClass: ['snack-bar']
});
   this.rate=this.resp[i-1];
 
   console.log("rates"+this.getStarArray(this.rate))

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
AfficherCalendar(){
  this.dial.open(CalendarComponent,{
    width:'700px',
    height:'700px'
  });

}
PrixApproximative(){
  this.dial.open(CarPriceComparisonComponent,{
    width:'500px',
    height:'500px'
  });
}
location(){
  this.dial.open(ChatbotComponent,{
    width:'500',
    height:'450px'
  });

}
@HostListener('click')
imageChange(){
  var src:any = this.el.nativeElement.src; // Sélectionnez l'élément image
  var prev:any=document.getElementsByClassName("image-text");
  prev.src=src;
 
   
 
console.log();


 }
PrixVoitureAvantVente()
{
  this.dial.open(DecoteVoitureComponent,{
    width:'600px',
    height:'470px'
  });

}

AddCom(){
 
  this.Comm.rating=this.rate;
  this.Comm.rate=this.rate.valueOf()+1;

    this.Comm.commentText=this.commenTex;
    this.Comm.username=this.username;
    this.Comm.dateJour= new Date();
    console.log(this.DateAujou)
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
    
    else{    this.IsLoading=true;

  
  this.comService.AddComment(this.Comm).subscribe();
  setTimeout(()=>{    
    this.IsLoading=false;

    Swal.fire("Element ajouté avec sucées !!!")

   },500);
     }
}
}
