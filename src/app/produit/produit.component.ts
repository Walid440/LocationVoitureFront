import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { OffresService } from '../services/offres.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit  {
  myscriptElemnt!:HTMLScriptElement;
  userlist:any; userlist2:any;
constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dial:MatDialog,private serv:OffresService,private renderer: Renderer2){  this.myscriptElemnt=document.createElement("script");
this.myscriptElemnt.src="src/assets/chat.js";
document.body.appendChild(this.myscriptElemnt);
}
  ngOnInit(): void {
    this.loadScript('assets/chat.js').then(() => {
      // Script has been loaded and executed.
      // Now you can safely call the JavaScript function.
      this.callCustomFunction();
    });
    this.getallImages()
    this.getallProd();
  }
  loadScript(scriptUrl: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const scriptElement = this.renderer.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = () => {
        resolve();
      };
      scriptElement.onerror = () => {
        reject(new Error(`Error loading script: ${scriptUrl}`));
      };
      this.renderer.appendChild(document.body, scriptElement);
    });
  }

  callCustomFunction() {
    // Now that the script is loaded, you can call the JavaScript function.
    (window as any).myFunction();
  }
  closeCompose(){

    this.dial.closeAll();
  }
  getallImages(){
    this.serv.Prod(this.data.id).subscribe(response => {
      this.userlist = response;
     // console.log("ueser"+this.userlist)
    });
  }
  zoom:boolean=false;
  zoom1:boolean=false;
  zoom2:boolean=false;
  zoo1:boolean=false;
  zoo:boolean=false;
  getallProd(){
    this.serv.GeIdProd(this.data.id).subscribe(response => {
      this.userlist2 = response;
     // console.log("ueser"+this.userlist)
    });
  }isHovered :boolean=false;
   zoom1ImagePath: string = ''; // Variable pour stocker le chemin de l'image pour zoom1
   button:boolean=false;
  activateZoom(zoomNumber: number) {
    // Désactiver toutes les instances de zoom
    this.zoom1 = false;

    // Activer l'instance de zoom correspondante
    if (zoomNumber === 1) {
      this.zoom = true;
      this.zoom1 = false;
      this.button=true;
      this.zoom1ImagePath = "http://localhost:8090/ImgProd1/' + this.data.id";
    } else if (zoomNumber === 2) {
      this.zoom = false;
      this.zoom1 = true;
      this.button=true;
      this.zoom1ImagePath = "http://localhost:8090/ImgProd2/' + this.data.id";
    } else if (zoomNumber === 3) {
      this.zoom1ImagePath = "http://localhost:8090/ImgProd3/' + this.data.id";
      this.zoom1 = false;
      this.zoom = false;
      this.zoom2 = true;
      this.button=true;
    }
   
  } close(){
    this.zoom = false;
    this.zoom1 = false;
    this.zoom2 = false;
    this.button=false;
    }
}