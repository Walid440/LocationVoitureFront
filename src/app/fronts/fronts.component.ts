import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-fronts',
  templateUrl: './fronts.component.html',
  styleUrls: ['./fronts.component.css']
})
export class FrontsComponent implements OnInit{
  ngOnInit(): void {}
  constructor(public dialogRef: MatDialogRef<IndexComponent>,private dial:MatDialog){ }
   


  

}