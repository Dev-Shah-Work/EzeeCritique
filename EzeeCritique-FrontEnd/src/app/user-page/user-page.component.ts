import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],

 
})
export class UserPageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
  userDetails() {
    this.user.getUserDetails().subscribe((val) => {
      console.log(val);
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(UserDetailsComponent,
      {
        width:'250px',
      
      });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
