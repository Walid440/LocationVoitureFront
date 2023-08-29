import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
 
declare var google: any; 

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  directionsService!: google.maps.DirectionsService;
  directionsRenderer!: google.maps.DirectionsRenderer;

  private map!: google.maps.Map;
  constructor (){}
  ngOnInit(): void {
     
    let loader = new Loader({
      apiKey: '--APIKEY--'
    })
    directionsService: google.maps.DirectionsService;
    directionsRenderer: google.maps.DirectionsRenderer;

    loader.load().then(() => {
      this.directionsService = new google.maps.DirectionsService();
      this.directionsRenderer = new google.maps.DirectionsRenderer()
       navigator.geolocation.watchPosition((position)=>{

      const location : google.maps.LatLngLiteral= { lat: position.coords.latitude, lng: 	 position.coords.longitude }
      const location1: google.maps.LatLngLiteral = { lat: 45.600, lng: 	 3.1555 }
    

      console.log(position.coords.latitude,position.coords.longitude)
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
  
     
      const adresse: string = '10 Rue du Père Legris';
let lat:any;
let long:any;
      fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(adresse)}&format=json`)
        
        .then((response: Response) => response.json())
        .then((data: any[]) => {
          if (data.length > 0) {
            const latitude: number = parseFloat(data[0].lat);
            const longitude: number = parseFloat(data[0].lon);
      lat=latitude;
      long=longitude;
            console.log(`Les coordonnées de ${adresse} sont : Latitude = ${latitude}, Longitude = ${longitude}`);
         
      





      const marker2= new google.maps.Marker({
        position: {lat:lat, lng: long },
        map: this.map,
      });
      const marker3= new google.maps.Marker({
        position: location,
        map: this.map,
        title:'Origin de voiture'
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
}




  
 


 





 
   



