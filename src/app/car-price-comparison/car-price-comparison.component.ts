import { Component, OnInit } from '@angular/core';
import { IzomocarService } from '../services/izomocar.service';
import { IzmoCarService } from '../services/izomocar.service.spec';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-car-price-comparison',
  templateUrl: './car-price-comparison.component.html',
  styleUrls: ['./car-price-comparison.component.css']
})
export class CarPriceComparisonComponent implements OnInit {  
  form!:FormGroup; 
  constructor(private chatGptService: IzmoCarService,private http:HttpClient,private fb:FormBuilder ) {}
  Annee:any;
  model:any;
  porte:any;
  km:any; 
  date:any;
  Puissance:any; 
    DELAY_IN_MS = 500; 
  ngOnInit(): void {

    
    this.form = this.fb.group({
       Annee:this.fb.control(""),
       model:this.fb.control(""),
       porte:this.fb.control(""),
       km:this.fb.control(""),
       date:this.fb.control(""),
       Puissance:this.fb.control("")

 })
  }

 // Adjust the delay as needed

    messages= [
      {"role": "system", "content": "You are a helpful assistant."}    ]
  

  car1Features = '';
  car2Features = '';
  comparisonResult :any;
 resultat="";

 compareCars() {
  // Assurez-vous de ne pas dépasser les limites de taux en ajustant la fréquence des demandes
  // Vérifiez votre plan OpenAI pour vous assurer que vous respectez les quotas
  // Si nécessaire, envisagez une mise à niveau de votre plan

  this.resultat = "j'aimerais obtenir une estimation du coût d'une voiture d'occasion que je souhaite acheter. Aidez-moi s'il vous plaît avec une seule réponse approximative sous cette forme : prix: [valeur] avec les caractéristiques suivantes : voiture modèle " + this.form.value.model + ", Année de fabrication " + this.form.value.Annee + ", nombre de portes " + this.form.value.porte + ", kilométrage " + this.form.value.km + ", date de mise en circulation " + this.form.value.date + ", puissance " + this.form.value.Puissance;

  let apiUrl = "https://api.openai.com/v1/chat/completions";
  let header = new HttpHeaders().set("Authorization", "Bearer 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");
  
  // Ajoutez une logique pour éviter de dépasser la limite de taux en ajustant la fréquence des demandes
  setTimeout(() => {
    this.messages.push({ role: "user", content: this.resultat })

    let payload = {
      model: "gpt-3.5-turbo",
      messages: this.messages
    }

    this.http.post(apiUrl, payload, { headers: header }).subscribe(
      (res) => {
        this.comparisonResult = res;
        console.log(this.resultat);
      },
      (error) => {
        if (error.status === 429) {
          // Gérez ici l'erreur 429 (Too Many Requests)
          console.error("Erreur 429: Trop de demandes. Veuillez ajuster la fréquence des demandes ou mettre à niveau votre plan OpenAI.");
        } else {
          console.error("Erreur lors de la demande à l'API OpenAI:", error);
        }
      }
    );
  }, this.DELAY_IN_MS); // Ajoutez le délai ici
}





}

