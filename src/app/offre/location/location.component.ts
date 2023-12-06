import { HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { commande } from 'src/app/Model/commande';
import { CommandeService } from 'src/app/services/commande.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'; // Assurez-vous d'inclure cette ligne
import { EchangeComponent } from '../echange/echange.component';
import { PaiementComponent } from 'src/app/paiement/paiement.component';
import { ServicesService } from 'src/app/services.service';
import { offre } from 'src/app/Model/offre';
import { location } from 'src/app/Model/location';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent  implements OnInit {
  editForm: any;  personl:location=new location(); 
  commande:commande=new commande(); 
  constructor(private dial:MatDialog,@Inject(MAT_DIALOG_DATA) public data: any, private Com:CommandeService,private Person:ServicesService,private route: ActivatedRoute){}
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
    this.editForm.get('dateDebut').valueChanges.subscribe(() => this.validateDate());
    this.editForm.get('dateFin').valueChanges.subscribe(() => this.validateDate());
 

  }
  validateDate() {
    const dateDebut = this.editForm.get('dateDebut').value;
    const dateFin = this.editForm.get('dateFin').value;
    
    const currentDate = new Date();
    const currentDateFormatted = currentDate.toLocaleDateString('fr-FR');
    
    const formattedDateDebut = new Date(dateDebut).toLocaleDateString('fr-FR');
    
     
    if (formattedDateDebut && formattedDateDebut < currentDateFormatted) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'La date de début ne peut pas être antérieure à la date actuelle.',
      });
     return;
      // Réinitialiser la valeur de dateDebut à vide ou à une valeur par défaut si nécessaire
      this.editForm.patchValue({ dateDebut: '' });
   
    }
  
    if (dateDebut && dateFin && dateDebut > dateFin) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'La date de fin ne peut pas être antérieure à la date de début.',
      });
  
      // Réinitialiser la valeur de dateFin à vide ou à une valeur par défaut si nécessaire
      this.editForm.patchValue({ dateFin: '' });
      return;
    }
  }
  
 
 
open() {
  let headers = new HttpHeaders();

 
  const article = this.editForm.value;
  
  // Concaténez la date de début et l'heure de début au format ISO 8601
  this.commande.dateDebut= article.dateDebut + "T" + article.heure_Debut;
  this.personl.dateDebut=article.dateDebut + "T" + article.heure_Debut;
  // Concaténez la date de fin et l'heure de fin au format ISO 8601
  this.commande.dateFin = article.dateFin + "T" + article.heure_Fin;
  this.personl.dateFin=article.dateFin + "T" + article.heure_Fin;

  // Calculez la différence entre les dates de début et de fin en millisecondes
  const dateDebut = new Date(article.dateDebut + "T" + article.heure_Debut).getTime();
  const dateFin = new Date(article.dateFin + "T" + article.heure_Fin).getTime();
  const differenceEnMillisecondes = dateFin - dateDebut;
  
  // Convertissez la différence en jours (1 jour = 24 heures)
  const differenceEnJours = differenceEnMillisecondes / (1000 * 60 * 60 * 24);

  // Utilisez la différence en jours pour calculer le prix total
  this.personl.prix = article.prix * differenceEnJours;
  
  this.commande.status="Encours";
  
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
   if(article.dateDebut==="")
   {
    Swal.fire("Veuillez entrer Date de debut !!")
   }
  else if(article.dateFin==="")
   {
    Swal.fire("Veuillez entrer Date de Fin !!")
   }
   else if(article.heure_Debut==="")
   {
    Swal.fire("Veuillez entrer Heure de Debut !!")
   }
   else if(article.heure_Fin==="")
   {
    Swal.fire("Veuillez entrer Heure de Fin !!")
   }
   else if(article.lieu==="")
   {
    Swal.fire("Veuillez entrer lieu !!")
   }
   else if(article.prix==="")
   {
    Swal.fire("Veuillez entrer prix !!")
   }  
   else{
this.Person.createLocation(this.data.id,this.personl).subscribe( data => {   
   this.Com.CreateCommande(this.commande,this.data.id,this.data.idUser).subscribe();
  this.dial.open(PaiementComponent,{
    width:'600px',
    height:'470px',
 
  });
  

   });
   }
  
}
  closeCompose(){

 
  }
}
