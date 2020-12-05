import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../model/employee';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {Admins} from '../model/admins';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [];

  url: 'http://localhost:3000/employeesse/';

  constructor(private  http: HttpClient, private router: Router, private route: ActivatedRoute) {
  }

  onGet() {
    return this.http.get('http://localhost:3000/employeesse/');
  }

  addemp(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/employeesse/', data);
  }

  sumbit(form) {
    this.addemp(form).subscribe(() => {
      this.router.navigate(['list']);
    });
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

  public count() {
    this.nbre = 0;
    for (let i = 0; i < this.employees.length; i++) {
      this.nbre++;
    }
    return this.nbre;
  }

  //return this.employees.length;


}
