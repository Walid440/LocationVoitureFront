import { Component, OnInit } from '@angular/core';
import { ReservationComponent } from '../reservation/reservation.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { FrontsComponent } from '../fronts/fronts.component';
 
import { BookComponent } from '../book/book.component';
import { OffresService } from '../services/offres.service';
import { ProduitComponent } from '../produit/produit.component';
import { LocationComponent } from '../offre/location/location.component';
 
 @Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  constructor(private dial:MatDialog,private offre:OffresService){ }    
      
    
listOffre:any;



    ngOnInit(): void {
      this.getAllOffre();

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

  open(){
    this.dial.open(LocationComponent,{
      width:'600px',
      height:'350px'
    });
   
  }
  
 
getAllOffre(){

  this.offre.getAll().subscribe(res=>{


this.listOffre=res;
console.log("res"+res);
  });
}
detail(){
  this.dial.open(ProduitComponent,{
    width:'550px',
    height:'350px'
  });
}
}
