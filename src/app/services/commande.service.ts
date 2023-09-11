import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { commande } from '../Model/commande';
   
@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }


  public getAllCommande(){

    return this.http.get<commande>("http://localhost:8090/AllCommande");
  }

}
