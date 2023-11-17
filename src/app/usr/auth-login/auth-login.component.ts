import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { User } from 'src/app/Model';
import { AuthRegisterV2Component } from 'src/app/User/authentication/auth-register-v2/auth-register-v2.component';
import { ServicesService } from 'src/app/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent  implements OnInit{
//  Public
public coreConfig: any;
public loginForm!: FormGroup ;
public loading = false;
public submitted = false;
public passwordTextType: boolean | undefined ;
personl:User=new User(); 
active:boolean=false;
userlist:any;
// Private
private _unsubscribeAll: Subject<any>;

/**
 * Constructor
 *
 * @param {CoreConfigService} _coreConfigService
 */
constructor(
  public modal: NgbActiveModal,
  private rout: Router,
  private Serv: ServicesService,
  private modalService: NgbModal,
  private _router: Router,
  private _formBuilder: FormBuilder
) 
 
 
 


 {
  // redirect to home if already logged in
  
  this._unsubscribeAll = new Subject();

  // Configure the layout

}
get f() {
  return this.loginForm.controls;
}
Submit1() {
  this.submitted = true;



    
}
togglePasswordTextType() {
  this.passwordTextType = !this.passwordTextType;
}
Annuler(){

  this.modal.close();
  
  }
  Val:String="";
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
         this.modal.close();
      }
    
    });
  
  


}

// Lifecycle Hooks
// -----------------------------------------------------------------------------------------------------

/**
 * On init
 */
ngOnInit(): void {
  this.loginForm=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
   
  });

  // get return url from route parameters or default to '/'
  
}

/**
 * On destroy
 */
ngOnDestroy(): void {
  // Unsubscribe from all subscriptions
//    this._unsubscribeAll.next();
  this._unsubscribeAll.complete();
}

Register(){

  const ref = this.modalService.open(AuthRegisterV2Component,  { size: 'lg', backdrop: 'static' });
  

}
}

