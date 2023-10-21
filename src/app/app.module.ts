import { NgModule } from '@angular/core';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { OwlModule } from 'ngx-owl-carousel';
import { BrowserModule } from '@angular/platform-browser';
import { PrincipalComponent } from './principal/principal.component';
import { ReservationComponent } from './reservation/reservation.component';
 
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule } from '@angular/material/dialog';
 
import { FrontsComponent } from './fronts/fronts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { BookComponent } from './book/book.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProduitComponent } from './produit/produit.component';
 
import { PaiementComponent } from './paiement/paiement.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
 import { SlickCarouselModule } from 'ngx-slick-carousel';
 import { environment } from 'environments/environment';
 import { NgMapsCoreModule } from '@ng-maps/core'; 
import { GoogleMapsModule } from '@angular/google-maps';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CarPriceComparisonComponent } from './car-price-comparison/car-price-comparison.component';
import { DecoteVoitureComponent } from './decote-voiture/decote-voiture.component';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { BootstrapModalModule } from 'ngx-bootstrap-modal';
import { LocationComponent } from './offre/location/location.component';
import { VenteComponent } from './offre/vente/vente.component';
 
 
  
       
 
 

    
@NgModule({
  declarations: [
    AppComponent,
  IndexComponent,
    PrincipalComponent,
    ReservationComponent,
  VenteComponent,
    FrontsComponent,
CarPriceComparisonComponent,
PaiementComponent,
    BookComponent,
      ProduitComponent,
       ChatbotComponent,
      CalendarComponent,
      DecoteVoitureComponent,
  LocationComponent
  ],
  imports: [
    ReactiveFormsModule,
   FullCalendarModule,
  GoogleMapsModule,
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
MatInputModule,
SlickCarouselModule,
 ModalModule.forRoot(),
 
   ],
 
  
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS,
    useValue: { height: '1000px', width: '1000px', autoFocus: true }}],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
