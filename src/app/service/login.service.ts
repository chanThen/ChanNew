import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoginComponent } from '../login/login.component';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http : Http) { }

  loginAuthentication(details) {
    let url : string = "http://localhost:8080/BookWorld/rest/user/auth";
    return this.http.post(url,details).map(response=>response.json());
  }

  addUser(UserDetails) {
    let url : string = "http://localhost:8080/BookWorld/rest/user/add";
    return this.http.post(url,UserDetails).map(response=>response.json());
  }
  
}
