import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit  {
  myscriptElemnt!:HTMLScriptElement;

 
constructor(private renderer: Renderer2){  this.myscriptElemnt=document.createElement("script");
this.myscriptElemnt.src="src/assets/chat.js";
document.body.appendChild(this.myscriptElemnt);
}
  ngOnInit(): void {
    this.loadScript('assets/chat.js').then(() => {
      // Script has been loaded and executed.
      // Now you can safely call the JavaScript function.
      this.callCustomFunction();
    });
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

}
