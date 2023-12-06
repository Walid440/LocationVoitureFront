import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ServicesService } from '../services.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-demande-devis',
  templateUrl: './demande-devis.component.html',
  styleUrls: ['./demande-devis.component.css']
})
export class DemandeDevisComponent implements OnInit {
  editForm!:FormGroup; 
  ngOnInit(): void {
    this.editForm=new FormGroup({
      nomPrenom:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      telephone:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),

       
    });
      
  }
constructor(private dial:MatDialog,public Person : ServicesService){}  
  nomPrenom="";
  email="";
  telephone="";
  description="";


  addData() {
    const formData = new  FormData();
    const article = this.editForm.value;

   //this.personl.role=this.registerForm.get("role").value;
 
   
 
   
   this.Person.Devis(article.email,article.telephone,article.nomPrenom,article.description).subscribe(re=>{

Swal.fire("Element envoyé avec Succées !!!")


   });
      }
      
 
   
      Annuler(){

        this.dial.closeAll();
        
        }
 
  

}
