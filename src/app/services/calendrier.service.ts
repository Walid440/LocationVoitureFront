import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 import { Calendar } from '@fullcalendar/core';
import { commande } from '../Model/commande';
import { Observable } from 'rxjs';

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
  private apiUrl = 'localhost://4200/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';
  
  getChatResponse(userMessage: string): Observable<any> {
    let responseMessage = '';

    // Vérifiez si l'utilisateur a dit "bonur en anglais"
    if (userMessage.toLowerCase() === 'bonjour en anglais') {
      responseMessage = 'Hello in French is "Bonjour"!';
    } else {
      // Si ce n'est pas une commande spéciale, envoyez la demande à ChatGPT
      const payload = { userMessage };
      return this.http.post(`${this.apiUrl}/chat`, payload);
    }

    // Créez une observable pour renvoyer la réponse personnalisée
    return new Observable(observer => {
      observer.next({ message: responseMessage });
      observer.complete();
    });
  }
}
