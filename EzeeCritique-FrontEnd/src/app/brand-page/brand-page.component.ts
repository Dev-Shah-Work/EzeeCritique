import { Component } from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-brand-page',
  templateUrl: './brand-page.component.html',
  styleUrls: ['./brand-page.component.css']
})
export class BrandPageComponent {
  currentUser: any;
  ngOnInit(): void {
    
    // this.router.navigate(['/user-page']);
    this.getUserDetails();
  }
  constructor(
    private router: Router,
    private user: UserService,
    public dialog: MatDialog
  ) {}
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    this.router.navigate(['/']);
  }

  openDialog() {
    const dialogRef = this.dialog.open(UserDetailsComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  getUserDetails() {
    this.user.getUserDetails().subscribe((val) => {
      this.currentUser = val;
      console.log(this.currentUser);
    
    });
  }
  ngOnDestroy(): void {
    this.currentUser = null;
  }

}
