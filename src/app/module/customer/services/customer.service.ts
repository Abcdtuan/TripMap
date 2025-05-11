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
    // Truyền bookingTripDto vào body của request POST
    return this.http.post(BASIC_URL + '/api/customer/trip/booking', bookingTripDto, {
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
