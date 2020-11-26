import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import {Employee} from '../model/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
// employees: Employee[];
  db: Employee[];
  searchValue: string;
  // emp;
  employeesse: any;

  constructor(private employeeService: EmployeeService) {
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

  /*onDelete(id: number){
    this.employeeService.onDelete(id);

  }*/

}
