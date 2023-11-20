import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comment } from '../Model/Comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }


  public getAll(){

    return this.http.get<comment>("http://localhost:8090/AllComment");
  }
  public AddComment(comm:comment,id:number){

    return this.http.post<comment>("http://localhost:8090/CreateComment/"+id,comm);

  }

  private apiKey = '3c90c12828a84eb0a80b9bfefbbe2ca3';
  private apiUrl = 'https://api.opencagedata.com/geocode/v1/json';

 

  // Méthode pour effectuer une recherche de géocodage à partir d'un numéro de téléphone
  geocodeByPhoneNumber(phoneNumber: string): Observable<any> {
    const query = `phone=${encodeURIComponent(phoneNumber)}`;
    const params = new HttpParams()
      .set('q', query)
      .set('key', this.apiKey);

    return this.http.get(this.apiUrl, { params });
  }
}
