import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from '../../../node_modules/protractor';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() rating:number;
  starWidth:number;
  constructor() { }
ngOnChanges(): void
{
this.starWidth = this.rating * 86/5;  
}
@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
 //@Output notify: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {
  }

  onClick(): void{
this.ratingClicked.emit(`${this.rating}`);

  }

}
