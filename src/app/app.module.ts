import { NgModule } from '@angular/core';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { OwlModule } from 'ngx-owl-carousel';
import { BrowserModule } from '@angular/platform-browser';
import { PrincipalComponent } from './principal/principal.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PaiementComponent } from './paiement/paiement.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FrontsComponent } from './fronts/fronts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { BookComponent } from './book/book.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
 

@NgModule({
  declarations: [
    AppComponent,
  IndexComponent,
    PrincipalComponent,
    ReservationComponent,
    PaiementComponent,
    FrontsComponent,


    BookComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatIconModule,
MatInputModule
  ],
 
  
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS,
    useValue: { height: '1000px', width: '1000px', autoFocus: true }}],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
