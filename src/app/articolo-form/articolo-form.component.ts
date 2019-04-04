import { Component, Output, EventEmitter } from '@angular/core';
import { Articolo} from '../articolo/articolo';
@Component({
  selector: 'articolo-form', // Selector used in html where this component is imported
  templateUrl: 'articolo-form.component.html',
  styleUrls: ['articolo-form.component.scss']
})
export class ArticoloFormComponent {
  model = new Articolo();
  @Output() confirm = new EventEmitter();
  constructor() {
  }
  confirmData(){
    alert("Data Confirmed");
    this.confirm.emit();
  }
}
