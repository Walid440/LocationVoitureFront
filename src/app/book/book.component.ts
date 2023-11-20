import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffresService } from '../services/offres.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { User } from '../Model';
import { ServicesService } from '../services.service';
import { Subject } from 'rxjs';
import { AuthRegisterV2Component } from '../User/authentication/auth-register-v2/auth-register-v2.component';
import { RegisterComponent } from '../register/register.component';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  error: any;
  loading: boolean=false;
  public coreConfig: any;
  public loginForm!: FormGroup ;
   public submitted = false;
  public passwordTextType: boolean | undefined ;
  personl:User=new User(); 
  active:boolean=false;
userlist:any;
constructor(  private Serv: ServicesService,public dialog: MatDialog,private rout:Router, private fb: FormBuilder,private offre:OffresService){}
 

  private _unsubscribeAll!: Subject<any>;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['admin@demo.com', [Validators.required, Validators.email]],
      password: ['admin', Validators.required]
    });
  }
   Annuler(){

   this.dialog.closeAll();
    
    }
    onSubmit() {
      this.submitted = true;
      this.personl.email=this.loginForm.value.email;
      this.personl.password=this.loginForm.value.password;
      console.log("res"+this.Serv.Login(this.loginForm.value.email, this.loginForm.value.password).subscribe())
      this.Serv.Login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
        (res) => {
       this.userlist=res;
      
       if(res===null)
           {
            Swal.fire("mot de passe ou login incorrecte!!")
          }else
          {
             // La réponse ne correspond pas à "oui", ce qui signifie une connexion réussie
             this.rout.navigate(['/'], { queryParams: { username: this.loginForm.value.email,id:this.userlist['id'] } });
             this.dialog.closeAll();
          }
        
        });
      
      
  
  
    } Register(){

      this.dialog.open(RegisterComponent,{
        width:'800px',
        height:'400px',
        disableClose: true,  // Empêche la fermeture du modal lors d'un clic en dehors de celui-ci

       });      
   
    }
    ForgotPass(){
      this.dialog.open(ForgetPasswordComponent,{
        width:'400px',
        height:'500px',
        disableClose: true,  // Empêche la fermeture du modal lors d'un clic en dehors de celui-ci

       }); 
    }
    ngOnDestroy(): void {
      // Unsubscribe from all subscriptions
  //    this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
    }
}
