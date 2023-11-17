import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { User } from '../Model';
import { ServicesService } from '../services.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
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
  constructor(private dial:MatDialog,public Person : ServicesService, private _formBuilder: FormBuilder) {
    this._unsubscribeAll = new Subject();

    // Configure the layout
   
  }

  Annuler(){

    this.dial.closeAll();
    
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
      naissance: ['', Validators.required],
      permis: ['', Validators.required],  
      delivre: ['', Validators.required],
      telephone: ['', Validators.required],
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
    this.personl.telephone=article.email;
    this.personl.delivre=article.delivre;
    this.personl.permis=article.permis;
    this.personl.naissance=article.naissance;
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





