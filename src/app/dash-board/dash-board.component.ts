import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  private userDetail:any;
  constructor(private router: Router) {
    this.userDetail = JSON.parse(sessionStorage.getItem('UserDetails'));
  }
  ngOnInit() {
    if(this.userDetail == null) {
      this.router.navigate(['login']);
    }
  }

  signout(){
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
