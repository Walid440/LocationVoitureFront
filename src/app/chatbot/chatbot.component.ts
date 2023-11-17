import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { OffresService } from '../services/offres.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
 
declare var google: any; 

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  directionsService!: google.maps.DirectionsService;
  directionsRenderer!: google.maps.DirectionsRenderer;
       location1:any;
active:boolean=false;
  private map!: google.maps.Map;
  constructor (private dial:MatDialog,private offre:OffresService){}
   OffreList!:any;
   editForm!:FormGroup;adresse:any;
   ngOnInit(): void {
    this.listOffre()
    this.editForm=new FormGroup({
   
      adresse:new FormControl('',[Validators.required]),
    
    });
    let loader = new Loader({
      apiKey: '--APIKEY--'
    })

 

    directionsService: google.maps.DirectionsService;
    directionsRenderer: google.maps.DirectionsRenderer;
   
    loader.load().then(() => {
      this.directionsService = new google.maps.DirectionsService();
      this.directionsRenderer = new google.maps.DirectionsRenderer()
       navigator.geolocation.watchPosition((position)=>{

      let location : google.maps.LatLngLiteral= { lat: position.coords.latitude, lng: 	 position.coords.longitude }
     

      console.log("ma position"+position.coords.latitude,position.coords.longitude)
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 6,
        styles:  [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ebe3cd"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#523735"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f1e6"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#c9b2a6"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#dcd2be"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#ae9e90"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#93817c"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#a5b076"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#447530"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f1e6"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#fdfcf8"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f8c967"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#e9bc62"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e98d58"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#db8555"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#806b63"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8f7d77"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#ebe3cd"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#b9d3c2"
              },
              {
                "saturation": 25
              },
              {
                "weight": 3.5
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#14fbff"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#92998d"
              }
            ]
          }
        ]

        
      }
      
      
      )
// Fonction pour convertir des degrés en radians
function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}
const lat1 = 48.5767322;
const lon1 = 2.4456387;
const lat2 = 48.59062726774768;
const lon2 = 2.4703381168246796;

// Fonction pour calculer la distance entre deux points géographiques en utilisant la formule de la haversine
 


     
     // const adresse: string = 'Rue du Four, 91540 Ormoy, France';
let lat:any;
let long:any;
      fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(this.editForm.value.adresse)}&format=json`)
        
        .then((response: Response) => response.json())
        .then((data: any[]) => {
          if (data.length > 0) {
            const latitude: number = parseFloat(data[0].lat);
            const longitude: number = parseFloat(data[0].lon);
      
           this.location1 ={lat:latitude,long:longitude}
            
            console.log(`Les coordonnées de ${this.adresse} sont : Latitude = ${latitude}, Longitude = ${longitude}`);
            const R =  6371; // Rayon de la Terre en kilomètres (utilisation du rayon par défaut de 6371 km si non spécifié)

            // Conversion des degrés en radians
            const lat1Rad = deg2rad(latitude);
            const lon1Rad = deg2rad(longitude);
            const lat2Rad = deg2rad(position.coords.latitude);
            const lon2Rad = deg2rad(position.coords.longitude);
          
            // Différences de latitude et de longitude
            const dLat = lat2Rad - lat1Rad;
            const dLon = lon2Rad - lon1Rad;
          
            // Calcul de la distance en utilisant la formule de la haversine
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                      Math.cos(lat1Rad) * Math.cos(lat2Rad) *
                      Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = R * c; // Distance en kilomètres

            console.log("Distance en kilomètres : " + distance);

 
      const marker2= new google.maps.Marker({
        position: {lat:latitude, lng: longitude },
        map: this.map,
        title:'Origin de voiture'
      });
      const marker3= new google.maps.Marker({
        position: location,
        map: this.map,
        title:'Ma position Actuel'
      });
      const directionRequest =(
        {
          origin: marker2,
          destination: marker3,
          travelMode: google.maps.TravelMode.DRIVING,
        }
      )
     
      const pathCoordinates = [
        marker2.getPosition(),
        marker3.getPosition(),
      ];
      
      const polyline = new google.maps.Polyline({
        path: pathCoordinates,
        geodesic: true,
        strokeColor: '#FF0000', // Couleur de la ligne (rouge dans cet exemple)
        strokeOpacity: 1.0,
        strokeWeight: 2, // Épaisseur de la ligne
      });
      
      polyline.setMap(this.map);
    
    } else {
      console.error('Aucun résultat trouvé.');
    }
  })
  .catch((error: Error) => {
    console.error('Erreur :', error);
  });
 
      
    
 
 

    })
    
    
  })
  

 
}
listOffre(){
  this.offre.getAll().subscribe(res=>{
    this.OffreList=res;
  console.log(this.OffreList)
       });


}
// Supposons que vous avez une propriété user dans votre composant.
// Assurez-vous de remplacer user par la propriété que vous utilisez dans votre template.

// Déclarez la propriété user avec un point d'interrogation pour indiquer qu'elle peut être nulle.
 // Remplacez UserType par le type réel de votre objet user.

// ...

// Assurez-vous d'initialiser ou de récupérer la valeur de votre propriété user quelque part dans votre code.

// ...

// Dans votre méthode onAdresseChange, effectuez la vérification de null avant d'accéder à la propriété.
onAdresseChange() {
   this.active=true;
   window.location
 }
close(){
  this.dial.closeAll();
}

}




  
 


 





 
   



