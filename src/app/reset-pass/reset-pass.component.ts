import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit{
  password: string = '';
  pass: string = '';
  token!:string;
  resetSuccess: boolean = false;
  registerForm!:FormGroup;
   
    constructor(private dial:MatDialog,
   
    private route: ActivatedRoute,private Ser:ServicesService,
    private router: Router,private _formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.registerForm =new FormGroup({
      password:new FormControl('',[Validators.required]),
      
    });

   this.route.queryParams.subscribe(res=>{
this.token=res['token'];
   });
  
  }
 

  resetPassword() {
 
    this.Ser.ResetPass(this.token, this.registerForm.value.password).subscribe(res=>{


      this.resetSuccess=true;
   }); 
  
      
    
}
Annuler(){
  this.dial.closeAll();
}
}