import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';
import User from '../model';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private user: UserService
  ) {}
  ngOnInit(): void {
    this.user.getAllUsers().subscribe((val) => {
      this.userList = val;
      console.log(this.userList);
    });
  }
  deleteMessage: string | undefined;
  userList: User[] = [];
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
  deleteUser(val: any) {
    let value = {
      id: val.toString(),
    };
    this.user.deleteUser(value).subscribe(
      (val) => {
        console.log(val);
        this.deleteMessage = 'User deleted successfully';
        setTimeout(() => {
          this.ngOnInit();
        }, 2000);
      },

      (error: HttpErrorResponse) => {
        if (error.error.message === 'User was deleted successfully') {
          this.ngOnInit();
        }
      }
    );
  }
}
