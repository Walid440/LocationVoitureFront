import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 import { Calendar } from '@fullcalendar/core';
import { commande } from '../Model/commande';

@Injectable({
  providedIn: 'root'
})
export class CalendrierService {

  constructor(private http:HttpClient) { }

  public getAllCalendar(){

    return this.http.get<Calendar>("http://localhost:8090/AllCalendar");
  }
  public SearchByCommande(start:any,end:any){

    return this.http.get<commande>("http://localhost:8090/search/commande/"+start+"/"+end);
  }
}
