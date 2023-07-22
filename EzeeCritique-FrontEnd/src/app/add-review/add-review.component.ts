import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import User from '../model';
import Review from '../model'

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
})
export class AddReviewComponent implements OnInit {
  brandList: User[] | undefined;
  brandName: any;
  constructor(private user: UserService) {}
  ngOnInit(): void {
    this.user.getBrands().subscribe(val=>{
      console.log("hello")
      this.brandList=val;
      console.log(this.brandList)
    });
    
  }

  logger(){
    console.log(this.brandName);
    
  }
  addReviewClicked(data:Review){
    console.log(data)
  }
  
}
