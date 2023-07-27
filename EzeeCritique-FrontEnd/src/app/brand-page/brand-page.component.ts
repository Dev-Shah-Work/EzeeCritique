import { Component } from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import Review from '../model';
import { ReviewService } from '../services/review.service';
import User from '../model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-brand-page',
  templateUrl: './brand-page.component.html',
  styleUrls: ['./brand-page.component.css'],
})
export class BrandPageComponent {
  currentUser: any;
  brandReviews: any;
  userData: User[] = [];


  ngOnInit(): void {

    // this.router.navigate(['/user-page']);
    this.getUserDetails();
    this.getReview();
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

  getUserDetails() {
    this.user.getUserDetails().subscribe((val) => {
      this.currentUser = val;
      console.log(this.currentUser);
      this.getReview();
    });
  }
  getReview() {
    let val = {
      bname: this.currentUser.name.toString(),
    };
    this.review.getReviewforBrand(val).subscribe((data) => {
      if (data) {
        this.brandReviews = data;
        console.log(this.brandReviews);
        // for (let index = 0; index < this.brandReviews.length; index++) {
        //   const element = this.brandReviews[index].uid;
        //   console.log(element);
        //   let data = {
        //     "uid": element.toString()
        //   }
          
        //   this.user.getUserById(data).subscribe((res) => {
        //     console.log(res);
        //     this.brandReviews[index] = {
        //       ...this.brandReviews[index], 
        //       name: res.name, 
        //     };
        //   });
        // }
        // console.log(this.brandReviews);
        
      }
    },
    (error: HttpErrorResponse) => {
      console.log(error);
      
    } 
    );
  }
  ngOnDestroy(): void {
    this.currentUser = null;
  }
  // getUserById(val:number){
  //   var data={
  //     "uid":val.toString()
  //   }
  //   this.user.getUserById(data).subscribe((user:any)=>{
  //     console.log(user.name)
  //     return user.name.toString();
  //   })
  // }
}
