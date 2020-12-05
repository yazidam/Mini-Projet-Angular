import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import {Employee} from '../model/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  db: Employee[];
  searchValue: string;

  employeesse: any;

  constructor(public employeeService: EmployeeService) {
  }


  ngOnInit(): void {
    this.employeeService.onGet().subscribe(
      (data) => {
        this.employeesse = data;
        console.log(this.employeesse);
      },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
    );

  }



}
