
import { Injectable,  } from '@angular/core';
const TOKEN = "token";
const USER = "user";
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {}
  

  static saveToken(token:string): void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }
  static saveUser(user: any): void{
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user))
  }
  static getUserId(): number{
    const user = this.getUser();
    if(user == null) { return 0; };
    return user.id;
  }
  static getToken(){
    return window.localStorage.getItem(TOKEN);
  }
  static getUserName(): any{
    const user = this.getUser();
    if(user == null) { return ''; };
    return user.name;
  }
  static getUser(){
    const user = localStorage.getItem(USER);
    return user ? JSON.parse(user): null;
  }
  static getUserRole():string{
    const user = this.getUser();
    if(user == null) return"";
    return user.role;
  }
  static isAdminLoggedIn():boolean{
    if(this.getToken() == null) return false;
    const role :string = this.getUserRole();
    return role == "ADMIN";
  }
  static isCustomerLoggedIn():boolean{
    if(this.getToken() == null) return false;
    const role :string = this.getUserRole();
    return role == "CUSTOMER";
  }
  static logout(): void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
    
  }
}

