import { Component } from '@angular/core';
import { ArticoliService } from './articoli.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ArticoliService]
})
export class AppComponent {
  title = 'myFirstApp';
  myArticolo;
  elencoArticoli;
	constructor(private articoliService: ArticoliService) {
		this.myArticolo = {
			titolo: "Boh",
			autore: "Mario Rossi",
      testo: "Creare componenti con Angular 2 è molto semplice.",
      numApprezzamenti: 0
    };
    this.elencoArticoli = articoliService.getArticoli();
  }
  mostraMessaggioRingraziamento(event) {
    alert("Grazie per aver espresso il tuo apprezzamento per l'articolo!\n " + event.numApprezzamenti);
  }
  confirmData() {
    alert("AppComponent confirm data");
  }
  addArticolo(articolo) {
    this.articoliService.addArticolo(articolo);
  }
}
