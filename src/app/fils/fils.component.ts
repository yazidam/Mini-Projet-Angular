import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() msg;
 // @Output() msgsomme = new EventEmitter<number>();

  constructor() { }
 /* nbremp(): number{

  }*/

  ngOnInit(): void {
  }

}
