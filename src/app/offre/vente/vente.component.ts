import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { commande } from 'src/app/Model/commande';
import { CommandeService } from 'src/app/services/commande.service';
import { LocationComponent } from '../location/location.component';
import { PaiementComponent } from 'src/app/paiement/paiement.component';
import { ServicesService } from 'src/app/services.service';
import { vente } from 'src/app/Model/vente';
 
 
@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit  {
  editForm: any;  personl:commande=new commande(); 
  ventes:vente=new vente();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dial:MatDialog, private Person:CommandeService,private Com:ServicesService,private route: ActivatedRoute){}
  ngOnInit(): void {
    const initialData = this.route.snapshot.data['data']; // Obtenez la valeur initiale depuis les données de la route
    editForm:FormGroup;
    this.editForm=new FormGroup({
      dateDebut:new FormControl('',[Validators.required]),
      dateVente:new FormControl('',[Validators.required]),
      heure_Debut:new FormControl('',[Validators.required]),
      heure_Fin:new FormControl('',[Validators.required]),
      lieu:new FormControl('',[Validators.required]),
      prix:new FormControl(this.data.prix,[Validators.required]),
      
    });
      console.log(this.data.idUser)
 

  }
  userlist:any;
   
open() {

  const formData = new FormData();
  const article = this.editForm.value;
  
  // Concaténez la date de début et l'heure de début au format ISO 8601
  this.ventes.datevente= article.dateVente;
  
  // Concaténez la date de fin et l'heure de fin au format ISO 8601
  this.personl.dateFin = null;
  
  // Calculez la différence entre les dates de début et de fin en millisecondes
  const dateDebut = new Date(article.dateDebut + "T" + article.heure_Debut).getTime();
  const dateFin = new Date(article.dateFin + "T" + article.heure_Fin).getTime();
  const differenceEnMillisecondes = dateFin - dateDebut;
  
  // Convertissez la différence en jours (1 jour = 24 heures)
  const differenceEnJours = differenceEnMillisecondes / (1000 * 60 * 60 * 24);
  this.personl.type="vente"
  // Utilisez la différence en jours pour calculer le prix total
  this.personl.prix = this.data.prix;
  
  this.Com.createVente(this.data.id,this.ventes).subscribe( data => {   
    this.Person.CreateCommande(this.personl,this.data.id,this.data.idUser).subscribe();
   this.dial.open(PaiementComponent,{
     width:'600px',
     height:'470px',
  
   });
   
 
    });
}
paiement(){
  this.dial.open(PaiementComponent,{
    width:'600px',
    height:'600px',
    data: { email:this.data.idUser }
  });
}
close(){
  this.dial.closeAll();
}
 
}

