import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmployeeService} from '../shared/employee.service';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() msg;
  @Output() msgcal = new EventEmitter<number>();

  constructor(public employeeService: EmployeeService) {
  }


  x: number;

  calcul() {
    this.x = (this.msg * 100) / 300;
    this.msgcal.emit(this.x);

  }


  ngOnInit(): void {
  }

}
