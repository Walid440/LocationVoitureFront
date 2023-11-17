import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { OffresService } from '../services/offres.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { paiement } from '../Model/paiement';
import { ServicesService } from '../services.service';
 import { Stripe } from 'stripe';
import Swal from 'sweetalert2';
 

// Configurez votre clé API SendGrid
 

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
}) 

  
export class PaiementComponent implements OnInit {
   @ViewChild('payementRef',{static:true})
   payementRef!: ElementRef;
personl:paiement=new paiement();
  editForm!:FormGroup; 
 cust:any;
 active:boolean=false;
   constructor(@Inject(MAT_DIALOG_DATA) public data: any,private Ser:ServicesService,private dial:MatDialog,private OffS:OffresService){}
   handler:any = null;
   ngOnInit() {
    this.loadStripe();
    this.editForm=new FormGroup({
      email:new FormControl('',[Validators.required]),
      numeroCarte:new FormControl('',[Validators.required]),
      Amount:new FormControl('',[Validators.required]),
      pay:new FormControl('',[Validators.required]),
      payementDate:new FormControl('',[Validators.required])
    });
   
  }
select(){
  console.log(this.editForm.value.pay)
  if(this.editForm.value.pay==="cash")
  {

this.active=true;
  }
  else{
    this.active=false;
  }
}

// Replace 'your-stripe-secret-key' with your actual Stripe secret key
 stripe = new Stripe('sk_test_51OBGlIJPU0KIqXjAlA0fhH62H8Ne5v4TVYh6dAnk5EnrUReGkpXPTugSlTrzx4tYloUigCDrfEHNH3EuZCcj5d9800xYILbHNP', {
 
});
   
  


async createCharge() {
  try {
    // Replace 'tok_visa' with an actual test token or use the Stripe Elements for obtaining a token
    const token = 'tok_visa';

    // Créez un client
    const customer = await this.stripe.customers.create({
      email: this.editForm.value.email,
      source: token
    });

    // Créez une charge associée à ce client
    const charge = await this.stripe.charges.create({
      amount: this.editForm.value.Amount, // Montant en cents
      currency: 'usd', // Devise
      description: 'Example charge',
      customer: customer.id
    });
  
    console.log('Charge created:', charge);
 
    this.Ser.CreatePaiement(this.editForm.value.Amount,this.editForm.value.email).subscribe({});

    Swal.fire("Paiement effectué avec succés!!!");

  } catch (error) {
    Swal.fire("Paiement Erroné  Veuillez verifier numéro de carte !!!");
  }
}


  
  
  
  
  closeCompose(){

    this.dial.closeAll();

  }
  
 
  Annuler() {
    this.editForm.reset({
      pay: "",
      Amount: "0",
      email: "",
      payementDate: ""
    });
  }
  
 

loadStripe() {
   
  if(!window.document.getElementById('stripe-script')) {
    var s = window.document.createElement("script");
    s.id = "stripe-script";
    s.type = "text/javascript";
    s.src = "https://checkout.stripe.com/checkout.js";
    s.onload = () => {
      this.handler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51OBGlIJPU0KIqXjAADPmh0AGwj8DxWJEP06T7Zph5SExhXGGfB2mqG8dkSuPzbOwYEIJUOZo6ErWvUO5DFkWoCXq00ln2a8Z2d',
        locale: 'auto',
        token: function (token: any) {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
          console.log(token)
          alert('Payment Success!!');
        }
      });
    }
     
    window.document.body.appendChild(s);
  }
}
}
 



 

