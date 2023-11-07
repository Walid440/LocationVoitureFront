import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { User } from 'src/app/Model';
import { ServicesService } from 'src/app/services.service';
import Swal from 'sweetalert2';
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'app-auth-register-v2',
  templateUrl: './auth-register-v2.component.html',
  styleUrls: ['./auth-register-v2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthRegisterV2Component implements OnInit {
  [x: string]: any;
  // Public  
  public passwordTextType: boolean | undefined;
  public coreConfig: any;
  //public passwordTextType: boolean;
  public registerForm!:FormGroup ;
  public submitted = false;
    personl:User=new User(); 
  // Private
  private _unsubscribeAll: Subject<any>;
active:boolean=false;
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {FormBuilder} _formBuilder
   */
  constructor(public modal:NgbActiveModal,public Person : ServicesService, private _formBuilder: FormBuilder) {
    this._unsubscribeAll = new Subject();

    // Configure the layout
   
  }

  Annuler(){

    this.modal.close();
    
    }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  /**
   * Toggle password
   */
  togglePasswordTextType() {
    this['passwordTextType'] = !this['passwordTextType'];
  }

  /**
   * On Submit
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
  
    this.registerForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });

     
  
  }
 
  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
   // this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
  
  addData() {
    const formData = new  FormData();
    const article = this.registerForm.value;
  this.personl.firstName=article.firstName;
    this.personl.lastName=article.lastName;
    this.personl.email=article.email;
    this.personl.password=article.password;
   //this.personl.role=this.registerForm.get("role").value;
 
  console.log(this.registerForm.value.email)
  
  // Créez une date au format JavaScript
     // Convertissez-la en chaîne au format "YYYY-MM-DD"
   console.log(this.active)
     
   
   if(this.active===false)
   {
    this.Person.Recherche(this.registerForm.value.email).subscribe( res => {
      if (res && res['email'] === this.registerForm.value.email) {
        this.active = false;
        Swal.fire("Email déjà existant ! Veuillez utiliser une autre adresse.");
      } else { Swal.fire("Opération réussie! Svp, vérifier votre mail pour completer l'inscription ");
        this.Person.Register(this.personl).subscribe();
      }
      
  
  });
   }
      
 
  
}

}


