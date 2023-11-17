import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { takeUntil, first } from 'rxjs/operators';
import { Subject } from 'rxjs';

 
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
 
import Swal from 'sweetalert2';
import { AuthRegisterV2Component } from '../auth-register-v2/auth-register-v2.component';
import { ServicesService } from 'src/app/services.service';
import { User } from 'src/app/Model';
import { RegisterComponent } from 'src/app/register/register.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-auth-login-v2',
  templateUrl: './auth-login-v2.component.html',
  styleUrls: ['./auth-login-v2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthLoginV2Component implements OnInit {
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
  constructor(public modal:NgbActiveModal,private dial:MatDialog,private rout: Router,private Serv:ServicesService,private modalService: NgbModal,private _router: Router,private _formBuilder:FormBuilder)
 
   
   

  
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
           this.rout.navigate(['/'], { queryParams: { username: this.loginForm.value.email } });
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

    this.dial.open(RegisterComponent,{
      width:'800px',
      height:'400px',
        // Empêche la fermeture du modal lors d'un clic en dehors de celui-ci

     });    
 
  }
  
}