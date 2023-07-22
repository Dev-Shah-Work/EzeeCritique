import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private baseURL = `http://localhost:8080/api/ezeecritique/review`;
  constructor(private http: HttpClient) {}
  addReview(data:any) {
    
    var token = localStorage.getItem('token');
    this.http.post(this.baseURL + '/addReview', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
