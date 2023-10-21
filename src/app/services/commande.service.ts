import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { commande } from '../Model/commande';
   
@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }
  public CreateCommande(person:commande,idF:number){
    return this.http.post<commande>("http://localhost:8090/CreateCommande/"+idF,person);
    
  }

  public getAllCommande(){

    return this.http.get<commande>("http://localhost:8090/allCom");
  }

}
