import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService : LoginService) { }

  ngOnInit() {
  }
  
login(userDetails){
  console.log(userDetails);
  this.loginService.loginAuthentication(userDetails).subscribe(
    res=>{
        this.success(res);
    },
    err=>{
      alert("Enter the Correct Credentials");
    });
  }
success(response){
  console.log(response);
  if(response.isActive == 1){
    console.log("success");
    sessionStorage.setItem("UserDetails", JSON.stringify(response));
    this.router.navigate(['dashboard']);
  }  else {
    alert("oops");
  }
}
}
