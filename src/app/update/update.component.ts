import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../shared/employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  form: FormGroup;
  emp;
  id;

  constructor(private bf: FormBuilder, private upemp: EmployeeService, private route: ActivatedRoute, private router: Router) {
    this.form = this.bf.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });


  }
  get id1() {
    return this.form.get('id');
  }
  get name1() {
    return this.form.get('name');
  }
  get email1() {
    return this.form.get('email');
  }
  get phone1() {
    return this.form.get('phone');
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.upemp.getempbyid(this.id).subscribe((rsult) => {
      this.emp = rsult;
      this.form.patchValue(this.emp);
    });
  }

  submit() {
    this.upemp.updateemp(this.form.value, this.id).subscribe( () => {
      this.router.navigate(['list']);
    });
  }
}
