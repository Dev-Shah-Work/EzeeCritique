import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { UserPageComponent } from './user-page/user-page.component';
import { BrandPageComponent } from './brand-page/brand-page.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { UpdateReviewComponent } from './update-review/update-review.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserEntryComponent,
    UserPageComponent,
    BrandPageComponent,
    AddReviewComponent,
    UpdateReviewComponent,
    UserDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
