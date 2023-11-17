import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit{
  password: string = '';
  pass: string = '';
  resetSuccess: boolean = false;
  constructor(private dial:MatDialog,
    
    private route: ActivatedRoute,private Ser:ServicesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  resetPassword() {
 
   this.Ser.ResetPass("05963eed-f5da-4558-aa46-a9cb1fb4ad8d", "12345").subscribe(res=>{


    Swal.fire("element modifie")
   });
      
      
    
}
Annuler(){
  this.dial.closeAll();
}
}