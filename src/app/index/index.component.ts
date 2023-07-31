import { Component, OnInit } from '@angular/core';
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
 
 @Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  constructor(private dial:MatDialog,private offre:OffresService,private rout:Router){ }    
      
  pers!:offre;

listOffre:any;
id!:number;


    ngOnInit(): void {
       this.getAllOffre();
       //this.id=this.rout.snapshot.params['id'];

    }

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
      height:'370px'
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
      height:'500px'
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
  this.dial.open(ProduitComponent,{
    width:'550px',
    height:'350px'
  });
}
}
