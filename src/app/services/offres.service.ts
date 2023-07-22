import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { offre } from '../Model/offre';
 

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  constructor(private http:HttpClient) { }


  public getAll(){

    return this.http.get<offre>("http://localhost:8090/AllOffre");
  }
}
