import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private router: Router) { }
log;
  mdp;
  login(log, mdp) {
    if ((mdp === 'admin') && (log === 'admin')) {
      this.router.navigate(['list']);
    }
  }

  ngOnInit(): void {
  }

}
