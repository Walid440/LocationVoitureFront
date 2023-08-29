import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IzmoCarService {
  private apiUrl = 'https://api.izmocar.com/estimation'; // Utilisez l'URL réelle d'IzmoCar ici

  constructor(private http: HttpClient) {}

  estimateCarPrice(carDetails: any): Observable<number> {
    const url = `${this.apiUrl}/estimate-price`;
    return this.http.post<number>(url, carDetails);
  }
}
