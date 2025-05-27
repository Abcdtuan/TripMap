import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../../../services/storage.service';
import { Observable } from 'rxjs';


const BASIC_URL = "http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllTrips():Observable<any>{
    return this.http.get(BASIC_URL + '/api/customer/trips',{
      headers:this.createAuthorizationHeader()
    });
  }
  getTripById(id:number):Observable<any>{
    return this.http.get(BASIC_URL + '/api/customer/trip/' + id,{
      headers:this.createAuthorizationHeader()
    });
  }

  bookingTrip(bookingTripDto: any): Observable<any> {
    return this.http.post(BASIC_URL + '/api/customer/trip/booking', bookingTripDto, {
      headers: this.createAuthorizationHeader()
    });
  }

  getBookingByUserId(): Observable<any> {
    return this.http.get(BASIC_URL + "/api/customer/trip/bookings/" + StorageService.getUserId(),  {
      headers: this.createAuthorizationHeader()
    });
  }
    getProfile():Observable<any>{
    return this.http.get(BASIC_URL + '/api/customer/profile',{
      headers:this.createAuthorizationHeader()
    });
  }
  putProfile(data: any): Observable<any> {
    return this.http.put(BASIC_URL + '/api/customer/updateCustomer', data, {
      headers: this.createAuthorizationHeader()
    })
  }

  deleteProfile(id:number):Observable<any>{
    return this.http.delete(BASIC_URL + '/api/customer/deleteCustomer/' + id,{
      headers:this.createAuthorizationHeader()
    });
  }
  getFavoriteItems(userId: number): Observable<any> {
    return this.http.get(BASIC_URL + '/api/customer/favorite/' + userId, {
      headers: this.createAuthorizationHeader()
    });
  }
  addToFavorite(userId: number, tripId: number): Observable<any> {
    return this.http.post(`${BASIC_URL}/api/customer/favorite/add/${userId}/${tripId}`, {}, {
      headers: this.createAuthorizationHeader()
    });
  }
  removeFromFavorite(favoriteId: number): Observable<any> {
    return this.http.delete(BASIC_URL + '/api/customer/favorite/remove/' + favoriteId, {
      headers: this.createAuthorizationHeader()
    });
  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    );
  }
}
