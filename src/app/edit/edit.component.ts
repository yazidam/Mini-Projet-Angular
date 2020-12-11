import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, NgModel, Validators} from '@angular/forms';
import {EmployeeService} from '../shared/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  header: string;
  form: FormGroup;

  constructor(private route: ActivatedRoute, public empl: EmployeeService, private router: Router, private  fb: FormBuilder) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required, Validators.maxLength(8), Validators.minLength(8), Validators.pattern('^[0-9]*$')],
    });
  }

  get id() {
    return this.form.get('id');
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get phone() {
    return this.form.get('phone');
  }

  ngOnInit(): void {

  }

}
