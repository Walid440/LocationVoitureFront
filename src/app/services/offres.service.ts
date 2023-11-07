import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { offre } from '../Model/offre';
import { produit } from '../Model/produit';
import { User } from '../Model/user';
 

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
}
