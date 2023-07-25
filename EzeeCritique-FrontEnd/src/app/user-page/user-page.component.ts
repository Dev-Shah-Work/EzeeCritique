import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { AddReviewComponent } from '../add-review/add-review.component';
import Review from '../model';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit, OnDestroy {
  currentUser: any;
  userReviews: any;
  ngOnInit(): void {
    this.router.navigate(['/user-page']);
    this.getUserDetails();
    //this.getReview();
  }
  constructor(
    private router: Router,
    private user: UserService,
    public dialog: MatDialog,
    private review: ReviewService
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
  openReviewDialog() {
    const dialogRef = this.dialog.open(AddReviewComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getUserDetails() {
    this.user.getUserDetails().subscribe((val) => {
      this.currentUser = val;
      console.log(this.currentUser);
      this.getReview();
    });
  }
  getReview() {
    let val = {
      uid: this.currentUser.id.toString(),
    };
    this.review.getReviewforUser(val).subscribe((data) => {
      if (data) {
        this.userReviews = data as Review[];
        console.log(this.userReviews);
      }
    });
    //console.log(this.userReviews);
  }
  ngOnDestroy(): void {
    this.currentUser = null;
  }
}
