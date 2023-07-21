import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import User from '../model';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}
  token = localStorage.getItem('token');

  private baseURL = `http://localhost:8080/api/ezeecritique/user`;
  addUser(data: User) {
    return this.http.post(this.baseURL + '/auth/register', data);
  }
  authenticateUser(data: User) {
    const loginUser = {
      username: data.username,
      password: data.password,
    };
    return this.http.post(this.baseURL + '/auth/login', loginUser);
  }
  authenticateToken() {
    if (this.token === null || this.token === undefined) {
      return false;
    }
    const isTokenExpired = this.jwtHelper.isTokenExpired(this.token);
    return !isTokenExpired;
  }
  getUserDetails() {
    console.log(this.token);
    
    return this.http.get<User>(this.baseURL + '/userDetails', {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }
}
