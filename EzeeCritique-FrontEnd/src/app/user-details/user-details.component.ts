import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import User from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  currentUser: any;
  ngOnInit(): void {
    this.user.getUserDetails().subscribe((val) => {
      this.currentUser = val;
    });
  }

  constructor(private user: UserService, private router: Router) {}

  ngOnDestroy(): void {
    // this.currentUser = {};
  }
}
