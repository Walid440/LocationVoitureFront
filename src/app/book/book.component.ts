import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffresService } from '../services/offres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  error: any;
  loading: boolean=false;

constructor(private rout:Router, private fb: FormBuilder,private offre:OffresService){}
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['admin@demo.com', [Validators.required, Validators.email]],
      password: ['admin', Validators.required]
    });
  }
submit(){

  
 
 
    this.offre.verif(this.loginForm.get('email')?.value).subscribe(data=>{

        this.rout.navigate(['/'], { queryParams: {username: this.loginForm.get('email')?.value} });
    }
    )
  
   
}
 
}
