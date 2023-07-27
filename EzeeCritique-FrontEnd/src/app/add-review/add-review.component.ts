import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import User from '../model';
import Review from '../model';
import { SharedDataService } from '../services/shared-data.service';
import { ReviewService } from '../services/review.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
})
export class AddReviewComponent implements OnInit {
  brandList: User[] | undefined;
  brandName: any;
  constructor(
    private user: UserService,
    private sds: SharedDataService,
    private review: ReviewService
  ) {}
  ngOnInit(): void {
    this.user.getBrands().subscribe((val) => {
      console.log('hello');
      this.brandList = val;
      console.log(this.brandList);
    });
  }

 
  addReviewClicked(data: Review) {
    console.log(data);

    this.user.getUserDetails().subscribe((val) => {
      data.uid = val.id;
      data.uname=val.name
      // console.log(val.id);
      this.review.addReview(data).subscribe(
        (res: string) => {
          console.log(res);
          window.location.reload();
        },
        (error: HttpErrorResponse) => {
          console.error(error);
        }
      );
    });
    // window.location.reload();

  }      // //Xchange this if time permits
}
