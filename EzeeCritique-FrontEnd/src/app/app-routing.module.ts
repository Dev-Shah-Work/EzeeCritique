import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReviewComponent } from './add-review/add-review.component';
import { BrandPageComponent } from './brand-page/brand-page.component';
import { UpdateReviewComponent } from './update-review/update-review.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { UserAuthGuard } from './user-auth-guard.guard';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: InitialPageComponent,
  },
  {
    path: 'add-review',
    component: AddReviewComponent,
  },
  {
    path: 'brand-page',
    component: BrandPageComponent,
  },
  {
    path: 'update-review',
    component: UpdateReviewComponent,
  },
  {
    path: 'user-page',
    component: UserPageComponent,
    canActivate: [UserAuthGuard],
  },

  {
    path: 'user-entry',
    component: UserEntryComponent,
  },
  {
    path : 'admin-page',
    component : AdminPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
