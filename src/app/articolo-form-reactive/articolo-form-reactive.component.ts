import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Articolo} from '../articolo/articolo';
@Component({
  selector: 'articolo-form-reactive',// Selector used in html where this component is imported
  templateUrl: './articolo-form-reactive.component.html',
  styleUrls: ['./articolo-form-reactive.component.scss']
})
export class ArticoloFormReactiveComponent {
  @Input() model: Articolo;
  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.model = new Articolo();
    this.myForm = fb.group({
      txtTitolo: ["", [	Validators.required,
				Validators.maxLength(30)]
			],
      txtAutore: ["", [	Validators.required,
				Validators.maxLength(20)]
			],
      txtTesto: ["", [	Validators.required,
				Validators.minLength(2000),
				Validators.maxLength(5000)]
			]
    });
    //synchronized model with new data
    this.myForm.valueChanges.subscribe(value => {
      this.model.titolo = value.txtTitolo;
      this.model.autore = value.txtAutore;
      this.model.testo = value.txtTesto;
    });
  }
  visualizzaArticolo() {
    console.log(this.myForm.value);
    console.log(this.model);
 }
}
