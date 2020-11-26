import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
@Input() calcul;
  constructor() { }

  ngOnInit(): void {
  }

}
