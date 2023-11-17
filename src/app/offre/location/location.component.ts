import { HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { commande } from 'src/app/Model/commande';
import { CommandeService } from 'src/app/services/commande.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'; // Assurez-vous d'inclure cette ligne
import { EchangeComponent } from '../echange/echange.component';
import { PaiementComponent } from 'src/app/paiement/paiement.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent  implements OnInit {
  editForm: any;  personl:commande=new commande(); 
  constructor(private dial:MatDialog,@Inject(MAT_DIALOG_DATA) public data: any, private Person:CommandeService,private route: ActivatedRoute){}
  ngOnInit(): void {
    const initialData = this.route.snapshot.data['data']; // Obtenez la valeur initiale depuis les données de la route

    this.editForm=new FormGroup({
      dateDebut:new FormControl('',[Validators.required]),
      dateFin:new FormControl('',[Validators.required]),
      heure_Debut:new FormControl('',[Validators.required]),
      heure_Fin:new FormControl('',[Validators.required]),
      lieu:new FormControl('',[Validators.required]),
      prix:new FormControl(this.data.prix,[Validators.required]),
      
    });
      
 

  }

 
 
open() {
  let headers = new HttpHeaders();

  const formData = new FormData();
  const article = this.editForm.value;
  
  // Concaténez la date de début et l'heure de début au format ISO 8601
  this.personl.dateDebut = article.dateDebut + "T" + article.heure_Debut;
  
  // Concaténez la date de fin et l'heure de fin au format ISO 8601
  this.personl.dateFin = article.dateFin + "T" + article.heure_Fin;
  
  // Calculez la différence entre les dates de début et de fin en millisecondes
  const dateDebut = new Date(article.dateDebut + "T" + article.heure_Debut).getTime();
  const dateFin = new Date(article.dateFin + "T" + article.heure_Fin).getTime();
  const differenceEnMillisecondes = dateFin - dateDebut;
  
  // Convertissez la différence en jours (1 jour = 24 heures)
  const differenceEnJours = differenceEnMillisecondes / (1000 * 60 * 60 * 24);

  // Utilisez la différence en jours pour calculer le prix total
  this.personl.prix = article.prix * differenceEnJours;
  
 this.personl.type="location"
  
// Créez une date au format JavaScript
   // Convertissez-la en chaîne au format "YYYY-MM-DD"
 
/*  /* formData.append('dateDebut',article.dateDebut);
  formData.append('heure_debut',"T"+article.heure_Debut);
  formData.append('adresse',article.dateFin);
  formData.append('heure_Fin',"T"+article.heure_Fin);
  formData.append('lieu',article.lieu);
  formData.append('prix',article.prix);
 // formData.append('file',this.userFile);  

    //console.log("cabin"+this.myGroup.value.cabins)
 // this.personl.cabins=article.cabin;*/
 // this.personl.cabins=article.cabin;*/
    
this.Person.CreateCommande(this.personl,this.data.prod,this.data.idUser).subscribe( data => {   
   
  this.dial.open(PaiementComponent,{
    width:'600px',
    height:'470px',
 
  });
  

   });
  
  
}
  closeCompose(){

 
  }
}
