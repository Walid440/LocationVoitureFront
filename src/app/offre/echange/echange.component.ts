import { HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { commande } from 'src/app/Model/commande';
import { echange } from 'src/app/Model/echange';
import { CommandeService } from 'src/app/services/commande.service';
import { OffresService } from 'src/app/services/offres.service';
import Swal from 'sweetalert2';
 

@Component({
  selector: 'app-echange',
  templateUrl: './echange.component.html',
  styleUrls: ['./echange.component.css']
})
export class EchangeComponent implements OnInit {
  editForm!: FormGroup;  personl:commande=new commande(); 
  personl1:echange=new echange(); 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dial:MatDialog, private Person:CommandeService,private Off:OffresService,private route: ActivatedRoute){}
  ngOnInit(): void {
    const initialData = this.route.snapshot.data['data']; // Obtenez la valeur initiale depuis les données de la route

    this.editForm=new FormGroup({
      propritaire2:new FormControl('',[Validators.required]),
      marque2:new FormControl('',[Validators.required]),
      modele2:new FormControl('',[Validators.required]),
      annee2:new FormControl('',[Validators.required]),
      prix:new FormControl('',[Validators.required]),
      lieu:new FormControl('',[Validators.required]),
    });
    
 

  }

 
 
open() {
  let headers = new HttpHeaders();

  const formData = new FormData();
  const article = this.editForm.value;
  
  // Concaténez la date de début et l'heure de début au format ISO 8601
  //this.personl.dateDebut = article.dateDebut + "T" + article.heure_Debut;
  
  // Concaténez la date de fin et l'heure de fin au format ISO 8601
  //this.personl.dateFin = article.dateFin + "T" + article.heure_Fin;
  
  // Calculez la différence entre les dates de début et de fin en millisecondes
  //const dateDebut = new Date(article.dateDebut + "T" + article.heure_Debut).getTime();
  //const dateFin = new Date(article.dateFin + "T" + article.heure_Fin).getTime();
  //const differenceEnMillisecondes = dateFin - dateDebut;
  
  // Convertissez la différence en jours (1 jour = 24 heures)
 /// const differenceEnJours = differenceEnMillisecondes / (1000 * 60 * 60 * 24);

  // Utilisez la différence en jours pour calculer le prix total
  //this.personl.prix = article.prix * differenceEnJours;
  
 
 // this.personl.type="echange"
// Créez une date au format JavaScript
   // Convertissez-la en chaîne au format "YYYY-MM-DD"
 

 
   this.personl1.propritaire2=article.propritaire2;
  this.personl1.modele2=article.modele2;
   this.personl1.marque2=article.marque2;
   this.personl1.annee2=article.annee2;
  this.personl1.lieu_echange=article.lieu;
  this.personl1.prix_ajouter=article.prix;
 // formData.append('file',this.userFile);  

    //console.log("cabin"+this.myGroup.value.cabins)
 // this.personl.cabins=article.cabin;*/
 // this.personl.cabins=article.cabin;*/
 if(article.propritaire2==="")
   {
    Swal.fire("Veuillez entrer propritaire2 !!")
   }
  else if(article.modele2==="")
   {
    Swal.fire("Veuillez entrer modele2 !!")
   }
   else if(article.marque2==="")
   {
    Swal.fire("Veuillez entrer marque !!")
   }
   else if(article.annee2==="")
   {
    Swal.fire("Veuillez entrer Annee!!")
   }
   else if(article.prix==="")
   {
    Swal.fire("Veuillez entrer prix !!")
   }
   else if(article.lieu==="")
   {
    Swal.fire("Veuillez entrer lieu !!")
   }  
   else{
    this.Off.CreateEchange(this.data.id,this.personl1).subscribe(res=>{

  
    
 this.Person.CreateCommande(this.personl,this.data.id,this.data.idUser).subscribe( data => {   
 
     
    });
    })
   }
}
  closeCompose(){

 this.dial.closeAll();
  }
}

