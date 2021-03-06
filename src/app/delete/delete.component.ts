import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id;

  constructor(private del: EmployeeService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.id = this.activateRoute.snapshot.params['id'];

  }

}
