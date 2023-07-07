import { NgModule } from '@angular/core';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { OwlModule } from 'ngx-owl-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserModule } from '@angular/platform-browser';
import { PrincipalComponent } from './principal/principal.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PaiementComponent } from './paiement/paiement.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PrincipalComponent,
    ReservationComponent,
    PaiementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
