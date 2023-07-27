import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import User from '../model';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  ngOnInit(): void {}
  currentUser = {
    username: '',
    name: '',
    role: '',
  };
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

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
    var token = localStorage.getItem('token');
    if (token === null || token === undefined) {
      return false;
    }
    const isTokenExpired = this.jwtHelper.isTokenExpired(token);
    return !isTokenExpired;
  }
  getUserDetails(): Observable<User> {
    var token = localStorage.getItem('token');

    // console.log(token);

    return this.http.get<User>(this.baseURL + '/userDetails', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getBrands() {
    var token = localStorage.getItem('token');
    return this.http.get<User[]>(this.baseURL + '/getBrands', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  // getUserById(data: any): Observable<User> {
  //   return this.http.post<User>(this.baseURL + '/getUserId', data);
  // }
}
