import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
 
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from './Model';
import { commande } from './Model/commande';
import { offre } from './Model/offre';
import { produit } from './Model/produit';
 
 
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public formData:  FormGroup | undefined; 
  list : offre[] = [] ;
  
  //private baseUrl1 = '/api/saveUserServer';
  host :string = "http://localhost:8090";
 private baseUrl = 'http://localhost:8089/SpringMVC/offre/';
   
  constructor(private  http: HttpClient) { }
  public dataForm:  FormGroup | undefined; 
  public getListOffre(){
    return this.http.get<offre>("http://localhost:8090/AllOffre");
    
  }
  public getOffreById(id:number){
    return this.http.get<offre>("http://localhost:8090/getIdOffre"+id);
    
  }
  public getCommandeById(id:number){
    return this.http.get<commande>("http://localhost:8090/getIdCommande/"+id);
    
  }
  
  create(id:number,start:string,end:string,offre: FormData) {
    return this.http.post<offre>("http://localhost:8089/SpringMVC/offre/CreateF/"+start+"/"+end+"/"+id,offre);  }
    UpdateFile(id:number,start:string,end:string,offre: offre) {
      return this.http.put<offre>("http://localhost:8089/SpringMVC/offre/UpdateF/"+id+"/"+start+"/"+end,offre);  }
  
  UpdatePhoto(id:number,formData:FormData) {
    return this.http.put<offre>("http://localhost:8089/SpringMVC/offre/UpdatePhoto/"+id,formData);  }

    UpdateF(id:number,start:string,end:string,offre: offre) {
      return this.http.put<offre>("http://localhost:8090/offre/UpdateF/"+id+"/"+start+"/"+end,offre);  }
  public EditOffre(person:offre){
    return this.http.put<offre>("http://localhost:8090/offre/UpdateOffre",person);
    
  }
  public EditProd(person:produit){
    return this.http.put<any>("http://localhost:8090/UpdateProduit",person);
    
  }
  public Paiement(){
    return this.http.get<any>("http://localhost:8090/AllPaiement");
    
  }
  public CreateOffre(person:FormData,id:number){
    return this.http.post<offre>("http://localhost:8090/CreateOffre/"+id,person);
    
  }
  
  
  public CreateProduit(person:FormData){
    return this.http.post<any>("http://localhost:8090/CreateProduit",person);
    
  }
    public search(start:string,end:string){
    return this.http.get<offre>("http://localhost:8089/SpringMVC/offre/calendars/search/"+start+"/"+end);
    
  }
  public DeleteOffre(id:number){
    return this.http.delete<offre>("http://localhost:8090/DeleteOffre/"+id);
    
  }
  public DeleteProd(id:number){
    return this.http.delete<produit>("http://localhost:8090/DeleteProd/"+id);
    
  }
  public DeleteCommande(id:number){
    return this.http.delete<commande>("http://localhost:8090/DeleteCommande/"+id);
    
  }
  public DelteFeedBack(id:number){
    return this.http.delete<offre>("http://localhost:8089/SpringMVC/Feed/DeleteFeed/"+id);
    
  }
  public Statis(id:number){
    return this.http.get<offre>("http://localhost:8089/SpringMVC/Feed/stat/"+id);
    
  }
  public getFeryById(id:number){
    return this.http.get<any>("http://localhost:8089/SpringMVC/Ferry/getIdFerry/"+id);
    
  }
  public getAllPassenger()
  {
    return this.http.get<any>("http://localhost:8089/SpringMVC/Passenger/getAllPassenger");


  }
  public getCommentStatistic(date:String)
  {
    return this.http.get<any>("http://localhost:8090/stat/"+date);


  }
  public getAllVehicule()
  {
    return this.http.get<any>("http://localhost:8090/AllProd");

  }
  public getAllLocation()
  {
    return this.http.get<any>("http://localhost:8090/AllLocation");

  }
  public getAllCommande()
  {
    return this.http.get<any>("http://localhost:8090/allCom");

  }
  public getCalendarByid(id:number)
  {
    return this.http.get<offre>("http://localhost:8089/SpringMVC/calendars/"+id);


  }
  public getType(id:number)
  {
    return this.http.get<offre>("http://localhost:8090/getType/"+id);


  }
  public getProduitCom(id:number)
  {
    return this.http.get<offre>("  http://localhost:8090/getProduitCom/"+id);


  }

  public getAllEchange()
  {
    return this.http.get<offre>("http://localhost:8090/allEchange");


  }
  public getAllVente()
  {
    return this.http.get<offre>("http://localhost:8090/AllVente");


  }
  public Recherche(email:String)
  {
    return this.http.get<User>("http://localhost:8090/Recherche/"+email);


  }
   
  public Register(user:User){
    return this.http.post<any>("http://localhost:8090/register",user);
    
  }
  public Login(email:String,pass:String)
  {
    return this.http.get<User>("http://localhost:8090/validatePassword/"+email+"/"+pass);


  } 
  
  
  rows:any;
 

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getDataTableRows()]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get rows
   */
  getDataTableRows(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:8090/SpringMVC/Ferry/personnels').subscribe((response: any) => {
        this.rows = response;
         
        resolve(this.rows);
      }, reject);
    });
  }
}
