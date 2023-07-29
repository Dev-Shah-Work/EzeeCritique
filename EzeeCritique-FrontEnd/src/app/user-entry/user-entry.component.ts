import { Component } from '@angular/core';
import { Router } from '@angular/router';
import User from '../model';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.css'],
})
export class UserEntryComponent {
  onLogin: boolean = false;
  authError: string | undefined;
  role: string | undefined;
  logInErrorMessage: string | undefined;
  existingMailMsg: string | undefined;
  constructor(private router: Router, private user: UserService) {}
  ngOnInit(): void {}

  signup(data: User): void {
    console.warn(data);
    console.warn(data.id);
    this.user.addUser(data).subscribe({
      next:(val) => {
        console.log(val);
        this.onLogin = true;
      },
      error:(err:HttpErrorResponse)=>{
        this.existingMailMsg=err.error.message;
      }
    });
  }
  login(data: User): void {
    console.warn(data);
    this.user.authenticateUser(data).subscribe((val: any) => {
      localStorage.setItem('token', val.token);
      localStorage.setItem('role', val.role);
      if (localStorage.getItem('role') === 'user') {
        this.router.navigate(['/user-page']);
      }
      if (localStorage.getItem('role') === 'brand') {
        this.router.navigate(['/brand-page']);
      }
      if(localStorage.getItem('role')==='admin')
      {
        this.router.navigate(['/admin-page']);
      }
    });
  }
  switchLogin() {
    this.onLogin = !this.onLogin;
  }
}
