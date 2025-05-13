import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../services/storage.service';

const BASIC_URL = "http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  postTrip(tripDto: any):Observable<any>{
    return this.http.post(BASIC_URL + '/api/admin/trip', tripDto,{
      headers:this.createAuthorizationHeader()
    });
  }
  getAllTrips():Observable<any>{
    return this.http.get(BASIC_URL + '/api/admin/trips',{
      headers:this.createAuthorizationHeader()
    });
  }
  deleteTrip(id:number):Observable<any>{
    return this.http.delete(BASIC_URL + '/api/admin/trip/' + id,{
      headers:this.createAuthorizationHeader()
    });
  }
  getTripById(id:number):Observable<any>{
    return this.http.get(BASIC_URL + '/api/admin/trip/' + id,{
      headers:this.createAuthorizationHeader()
    });

  }
  updateTrip(tripId: Number,tripDto: any):Observable<any>{
    return this.http.put(BASIC_URL + '/api/admin/trip/'+ tripId, tripDto,{
      headers:this.createAuthorizationHeader()
    });
  }

  getTripBookings():Observable<any>{
    return this.http.get(BASIC_URL + '/api/admin/trip/bookings',{
      headers:this.createAuthorizationHeader()
    });

  }
  changeBookingTripStatus(bookingId: number, status:string):Observable<any>{
    return this.http.get(BASIC_URL + `/api/admin/trip/booking/${bookingId}/${status}` ,{
      headers:this.createAuthorizationHeader()
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
