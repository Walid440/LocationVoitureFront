import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comment } from '../Model/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }


  public getAll(){

    return this.http.get<comment>("http://localhost:8090/AllComment");
  }
  public AddComment(comm:comment){

    return this.http.post<comment>("http://localhost:8090/CreateComment",comm);
  }
}
