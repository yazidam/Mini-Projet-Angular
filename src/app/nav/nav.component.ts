import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Admins} from '../model/admins';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  listadmin: Admins[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private  http: HttpClient) {
    this.http.get<Admins[]>('http://localhost:3000/admins/').subscribe(
      (data) => {
        this.listadmin = data;
      }
    );
  }

  log;
  mdp;
  test: boolean = false;

  login(log, mdp) {
    console.log(this.listadmin);
    for (let i = 0; i < this.listadmin.length; i++) {
      if ((this.listadmin[i].login === log) && (this.listadmin[i].mdp === mdp)) {
        this.router.navigate(['list']);
        this.test = true;
      }

    }
    if (this.test === false) {
      alert('check your settings');
    }

  }



  /*login(log, mdp) {
    if ((mdp === 'admin') && (log === 'admin')) {
      this.router.navigate(['list']);
    } else {
      alert('verifier votre parametre');
    }
  }*/

  ngOnInit(): void {
  }

}
