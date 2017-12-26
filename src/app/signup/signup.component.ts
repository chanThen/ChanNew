import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router , private loginservice: LoginService) { }

  ngOnInit() {
  }
  signup(UserDetails) {
    UserDetails.isActive = 1;
    console.log(UserDetails);
   
    this.loginservice.addUser(UserDetails).subscribe(
      response => this.success(response),
      error    => alert("The User Email Already Exists")
    );
  }
  success(reponseData) {
       if (reponseData = 'Success') {
      this.router.navigate(['login']);
    }  else {
      alert('oops');
    }
  }
}
