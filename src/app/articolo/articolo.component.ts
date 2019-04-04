import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Articolo }  from './articolo'

@Component({
  selector: 'articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.scss']
})
export class ArticoloComponent {

  @Input() articolo: Articolo;
  @Output() like = new EventEmitter();
  constructor() {}
  incrementaApprezzamenti() {
    this.articolo.numApprezzamenti = this.articolo.numApprezzamenti + 1;
    this.like.emit({numApprezzamenti: this.articolo.numApprezzamenti});
	}
}


