import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Review from '../model';
import { UserService } from '../services/user.service';
import User from '../model';
import { ReviewService } from '../services/review.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-review',
  templateUrl: './update-review.component.html',
  styleUrls: ['./update-review.component.css'],
})
export class UpdateReviewComponent implements OnInit {
  brandList: User[] | undefined;
  currentUser: any;
  uid: number | any;
  uname: string | any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public reviewData: Review,
    private user: UserService,
    private review: ReviewService
  ) {}
  ngOnInit(): void {
    console.log(this.reviewData);
    this.user.getBrands().subscribe((val) => {
      this.brandList = val;
    });
    this.getUserDetails();
    // this.getUserDetails();
  }
  updateReviewClicked(data: Review) {
    // this.getUserDetails();
    console.log('Clicked Update');
    if (data) {
      // console.log("inside if")
      data.id = this.reviewData.id;
      data.uid = this.uid;
      data.uname = this.uname;  
    }
    console.log(data);

    this.review.updateReview(data).subscribe(
      (val) => {
        console.log(val);
        window.location.reload();
      },
      (error: HttpErrorResponse) => {
        if (error.error.text === 'Your review was updated successfully') {
          window.location.reload();
        }
      }
    );
  }
  getUserDetails() {
    this.user.getUserDetails().subscribe({
      next: (val) => {
        this.currentUser = val;
        this.uid = this.currentUser.id;
        this.uname = this.currentUser.name;
        // console.log(this.currentUser);
      },
      error: (err) => {},
      complete: () => {},
    });
  }
}
