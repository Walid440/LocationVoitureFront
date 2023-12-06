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
import { location } from 'src/app/Model/location';
import { vente } from 'src/app/Model/vente';
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
  public VerifPass(email:string,pss:string){
    return this.http.get<User>("http://localhost:8090/users/verif/"+email+"/"+pss);
    
  }

  public getOffreById(id:number){
    return this.http.get<offre>("http://localhost:8090/getIdOffre"+id);
    
  }
  public getCommandeById(id:number){
    return this.http.get<commande>("http://localhost:8090/getIdCommande/"+id);
    
  }
  public getProdById(id:number){
    return this.http.get<any>("http://localhost:8090/getIdProd/"+id);
    
  }
 
  private stripeKey = 'pk_test_51OBGlIJPU0KIqXjAADPmh0AGwj8DxWJEP06T7Zph5SExhXGGfB2mqG8dkSuPzbOwYEIJUOZo6ErWvUO5DFkWoCXq00ln2a8Z2d'; // Remplacez par votre clé publique Stripe

 
  public isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  login() {
    // Perform login logic
    this.isAuthenticatedSubject.next(true);
  }

  logout() {
    // Perform logout logic
    this.isAuthenticatedSubject.next(false);
  }

  createLocation(id:number,location:location) {
    return this.http.post<any>("http://localhost:8090/CreateLocation/"+id,location);  
  }
  createVente(id:number,v:vente) {
    return this.http.post<any>("http://localhost:8090/CreateVente/"+id,v);  
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
  
  public CreatePaiement(price:String,email:String){
    return this.http.get<any>("http://localhost:8090/pay/"+price+"/"+email);
    
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
  public Devis(email:String,tel:String,nom:String,desc:String)
  {
    return this.http.get<any>("http://localhost:8090/contact/"+email+"/"+tel+"/"+nom+"/"+desc);


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


  } public ResetPass(email:String,pass:String)
  {
    return this.http.get<User>("http://localhost:8090/users/rest/"+email+"/"+pass);


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

  private isAuthenticated = false;

  login1(username: string, password: string): boolean {
    // Mettez en œuvre la logique d'authentification ici (par exemple, une vérification côté serveur)
    // En supposant que l'authentification réussisse, définissez isAuthenticated sur true
    this.isAuthenticated = true;
    return this.isAuthenticated;
  }

  logout1(): void {
    // Déconnectez l'utilisateur en réinitialisant isAuthenticated à false
    this.isAuthenticated = false;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
