import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../model/employee';

import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[];
  affiche: boolean = false;
  y: number;
  url: 'http://localhost:3000/employeesse/';

  constructor(private  http: HttpClient, private router: Router, private route: ActivatedRoute) {
  }

  onGet() {
    return this.http.get<Employee[]>('http://localhost:3000/employeesse/');
  }

  addemp(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/employeesse/', data);
  }




  getempbyid(id: number) {
    return this.http.get('http://localhost:3000/employeesse/' + id);
  }

  deleteemp(id: number) {
    return this.http.delete('http://localhost:3000/employeesse/' + id);
  }

  updateemp(data: any, id: any): Observable<any> {
    const url: string = 'http://localhost:3000/employeesse/' + id;
    return this.http.put(url, data);
  }


  nbre: number;

  public nbr() {
    this.nbre = 0;
    for (let i = 0; i < this.employees.length; i++) {
      this.nbre++;
    }
    return this.nbre;


  }
  sumbit(form) {
    this.addemp(form).subscribe(() => {
      this.router.navigate(['list']);
    });
  }

  delet(id) {
    this.deleteemp(id)
      .subscribe(data => this.router.navigate(['list']));
  }

  getemp() {
    this.onGet().subscribe(
      (data) => {
        this.employees = data;
        console.log(this.employees);
      },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
    );
  }


  aff(value) {
    this.affiche = !this.affiche;
    this.y = value;
    return value;
  }

}
