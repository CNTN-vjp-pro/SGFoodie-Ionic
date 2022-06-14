import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IRestaurant } from '../../../interfaces/restaurants';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class FoodieService {
  rest_API_URL = "http://localhost:3000/"
  constructor(private _http: HttpClient) { }
  getRestaurantsList(): Observable<IRestaurant[]> {
    let API_URL = `${this.rest_API_URL}restaurants`;
    return this._http.get<IRestaurant[]>(API_URL)
    .pipe(
      // retry(3),
      // catchError(this.errorHandler)
    )
  }

  getResById(_id:any): Observable<IRestaurant[]>{
    return this._http.get<IRestaurant[]>(`${this.rest_API_URL}restaurant/${_id}`);
  }

  getRestaurantsListByCategory(category:any){
	return this._http.get<IRestaurant[]>(`${this.rest_API_URL}restaurants/${category}`);
  }
  
  errorHandler(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message))
  }
  postBookingTable(data: Booking){
	return this._http.post(`${this.rest_API_URL}bookingTable`,data);
  }
}