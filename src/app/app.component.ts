import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFirstApp';
  myArticolo;
	constructor() {
		this.myArticolo = {
			titolo: "Boh",
			autore: "Mario Rossi",
      testo: "Creare componenti con Angular 2 è molto semplice.",
      numApprezzamenti: 0
		};
  }
  mostraMessaggioRingraziamento(event) {
    alert("Grazie per aver espresso il tuo apprezzamento per l'articolo!\n " + event.numApprezzamenti);
  }
  confirmData() {
    alert("AppComponent confirm data");
  }
}
