import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'
import { CommentService } from '../services/comment.service';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { CalendrierService } from '../services/calendrier.service';
import { CommandeService } from '../services/commande.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @ViewChild('calendar') calendarComponent: any;
  start :any=[];
  modalRef?:BsModalRef;
  dat!:any;
  model:any;
  end:any;
  form!:FormGroup;
  date_debut:any;
  date_fin:any;
  IsLoading!:boolean;
  ngOnInit(): void {
    this.getAllCalend();
    
    this.form = this.fb.group({
      date_debut:new FormControl(),
      date_fin:new FormControl()


})
   }
   title:any;
    calendarOptions:CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [ dayGridPlugin ],
    eventClick:this.handeleDateClick.bind(this),
    events:[],
   };

   config={
    animated:true
  };
   phoneNumber: string = '';
   results: any[] = [];
   @ViewChild('template') template!:string;
   constructor(private fb:FormBuilder ,private cale: CalendrierService, private modalService:BsModalService) {}
  handeleDateClick(arg:any)
   {  
    this.title=arg.event._def.title;
    this.modalRef=this.modalService.show(this.template,this.config);
    this.start=arg.event.start;
    this.end=arg.event.end;
  
   }
   event=[];
   titreEven:any=[];
   evenDAte:any=[];
   getAllCalend(){
 
    this.cale.getAllCalendar().subscribe(res => {
      this.dat = res;
  
      // Créez un tableau pour stocker tous les événements
      const events = [];
  
      for (const event of this.dat) {
          const title = event.title;
          const start = event.start;
          const end = event.end;
          const color = event.color;
   this.model=title;
          // Ajoutez chaque événement au tableau des événements
          events.push({
              title: title,
              start: start,
              end: end,
              backgroundColor:color, // Couleur de fond
              borderColor: color,     // Couleur de bordure
              textColor: 'white'      // Couleur du texte
          });
         
      }
  
      // Configurez les options du calendrier avec le tableau des événements
      this.calendarOptions = {
          initialView: 'dayGridMonth',
          events: events, // Utilisez le tableau des événements ici
          eventClick: this.handeleDateClick.bind(this),
          
      };
  });
   }  
   calendarApi: any;

ngAfterViewInit() {
  this.calendarApi = this.calendarComponent.getApi();

}
rechargerCalendrier() {
  this.calendarOptions.initialDate = this.date_debut;
  this.calendarApi.gotoDate(this.date_debut);
}

   RechercheCalen(){
    this.cale.SearchByCommande(this.date_debut+'T00:00',this.date_fin+'T00:00').subscribe(res => {
      this.dat = res;
      this.IsLoading=true;
setTimeout(() => {
   this.IsLoading=false; 
   this.rechargerCalendrier();
}, 2000);
   

   });
  }
}