import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { User } from '../Model';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit{
  [x: string]: any;
  // Public  
  public passwordTextType: boolean | undefined;
  public coreConfig: any;
  //public passwordTextType: boolean;
  public registerForm!:FormGroup ;
  public submitted = false;
    personl:User=new User(); 
    val="0";
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
  
   
    this.registerForm=new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
     
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
 
  
 
    this.Person.Login(this.registerForm.value.email,this.registerForm.value.password).subscribe( res => {
      this['userlist']=res;
      
      if(res===null)
          {
           Swal.fire("mot de passe ou login incorrecte!!")
         }
      else{
     this.Person.VerifPass(this.registerForm.value.email,this.registerForm.value.password).subscribe(res=>{

          Swal.fire("Opération réussie! Svp, vérifier votre mail pour recupérer votre mot de passe");
        });
 }

  
 
  
   
   
    
      
 
  
});
  }


}






