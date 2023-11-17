import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { offre } from '../Model/offre';
import { produit } from '../Model/produit';
import { User } from '../Model/user';
import { echange } from '../Model/echange';

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  constructor(private http:HttpClient) { }

host:string="http://localhost:8090/ImgOffre/";
  public getAll(){

    return this.http.get<offre>("http://localhost:8090/AllOffre");
  }

  public search(dat:string,type:string,ville:string){
    return this.http.get<offre>("http://localhost:8090/search/"+dat+"/"+type+"/"+ville);

  }
  public Prod(id:number){
    return this.http.get<produit>("http://localhost:8090/ImgProd/"+id);

  }
  public Prod1(id:number){
    return this.http.get<produit>("http://localhost:8090/ImgProd1/"+id);

  }
  public verif(email:String){
    return this.http.get<any>("http://localhost:8090/Recherche/"+email);
    
  }
  public GeIdProd(id:number){
    return this.http.get<any>("http://localhost:8090/getIdProd/"+id);
    
  }
  public CreateEchange(id:number,echange:echange){
    return this.http.post<echange>("http://localhost:8090/CreateEchange/"+id,echange);
    
  }
  public Paiement(email:string,price:number){
    return this.http.get<any>("http://localhost:8090/pay/"+price+"/"+email);
    
  }
  private handler: any;

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51OBGlIJPU0KIqXjAADPmh0AGwj8DxWJEP06T7Zph5SExhXGGfB2mqG8dkSuPzbOwYEIJUOZo6ErWvUO5DFkWoCXq00ln2a8Z2d',
          locale: 'auto',
          token: (token: any) => {
            // Logique après le succès du paiement
            console.log(token);
            alert('Payment Success!!');
          }
        });
      };
      s.onerror = (error) => {
        console.error('Stripe script load error:', error);
      };
      window.document.body.appendChild(s);
    }
  }

  openStripeCheckout(amount: number) {
    if (this.handler) {
      this.handler.open({
        name: 'Demo Site',
        description: '2 widgets',
        amount: amount * 100
      });
    } else {
      console.error('Stripe handler not initialized.');
    }
  }
}
 
