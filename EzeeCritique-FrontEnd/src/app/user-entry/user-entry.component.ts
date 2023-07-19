import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.css']
})
export class UserEntryComponent 
{
  onLogin: boolean = false;
  authError: string = '';
  constructor(private router: Router) {}
  ngOnInit(): void {
    
  }

  signup(data: any): void {
    // console.warn(data);
   
  }
  login(data: any): void {
    
    // console.warn(data);
  }
  switchLogin() {
    this.onLogin = !this.onLogin;
  }
}
