import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




const BASE_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(signupRequest: any):Observable<any>{
    return this.http.post(BASE_URL + '/api/auth/signup', signupRequest);
  }

  login(loginRequest:any):Observable<any>{
    return this.http.post(BASE_URL + '/api/auth/login', loginRequest)
  }

}
