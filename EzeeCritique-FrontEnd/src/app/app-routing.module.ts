import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReviewComponent } from './add-review/add-review.component';
import { BrandPageComponent } from './brand-page/brand-page.component';
import { UpdateReviewComponent } from './update-review/update-review.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserEntryComponent } from './user-entry/user-entry.component';

const routes: Routes = [
  {
    path:'add-review',
    component:AddReviewComponent
  },
  {
    path:'brand-page',
    component:BrandPageComponent
  },
  {
    path:'update-review',
    component:UpdateReviewComponent
  },
  {
    path:'user-page',
    component:UserPageComponent
  },
  {
    path:'user-entry',
    component:UserEntryComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
