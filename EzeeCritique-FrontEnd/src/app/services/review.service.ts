import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Review from '../model';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private baseURL = `http://localhost:8080/api/ezeecritique/review`;
  constructor(private http: HttpClient) {}
  addReview(data: Review) {
    var token = localStorage.getItem('token');
    return this.http.post(this.baseURL + '/addReview', data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'text/plain', // Set Accept header to receive plain text response
      },
      responseType: 'text',
    });
  }
  getReviewforUser(data: any) {
    var token = localStorage.getItem('token');
    return this.http.post(this.baseURL + '/getReviewByUid', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  deleteReview(id: number) {
    var token = localStorage.getItem('token');
    return this.http.delete(this.baseURL + `/deleteReview/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  updateReview(data: Review) {
    var token = localStorage.getItem('token');
    return this.http.put(this.baseURL + '/updateReview', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getReviewforBrand(data: any) {
    var token = localStorage.getItem('token');
    return this.http.post(this.baseURL + '/getReviewByBname', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
