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
import { InitialPageComponent } from './initial-page/initial-page.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    UserEntryComponent,
   
    BrandPageComponent,
    AddReviewComponent,
    UpdateReviewComponent,
    UserDetailsComponent,
    InitialPageComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule, 
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
