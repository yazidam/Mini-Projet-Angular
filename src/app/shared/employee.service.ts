import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../model/employee';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //employees: Employee[]=[];
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

  /* onDelete(id: number) {
     let employee = this.employeesse.find(del => del.id === id);
     let index = this.employeesse.indexOf(employee, 0);
     this.employeesse.splice(index, 1);
   }*/
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


 /* submit() {
    this.empl.updateemp(this.upemp.form.value, this.upemp.id).subscribe(() => {
      this.router.navigate(['']);
    });
  }*/


  /*  Addemp(employee: Employee) {
      this.http.post<Employee>('http://localhost:3000/employeesse/', employee);

    }*/

  /*  submit(from: NgForm) {
      this.onAdd(form).subscribe(() => {
          this.router.navigate(['']);
        },
        (error) => {
          switch (error.status) {
            case 404: {
              console.log('Not Found');
              break;
            }
            case 403: {
              console.log('Access Denied');
              break;
            }
            case 500: {
              console.log('Internal Server Error: ');
              break;
            }


          }
        }
      );

    }*/


}
