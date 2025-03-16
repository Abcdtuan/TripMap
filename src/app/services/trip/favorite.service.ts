import { FavoriteItem } from '../../shared/models/FavoriteItem';
import { Injectable } from '@angular/core';
import { Favorite } from '../../shared/models/Favorite';
import { BehaviorSubject, Observable } from 'rxjs';
import { Trip } from '../../shared/models/Trip';


@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorite: Favorite = this.getFavoriteFromLocalStorage();
  private favoriteSubject = new BehaviorSubject<Favorite>(this.favorite);
  constructor() { }
  addToFavorite(trip: Trip): void {
    console.log("Thêm vào yêu thích: ", trip);
    let favoriteItem = this.favorite.items.find(item => item.trip.id === trip.id);
    if(favoriteItem)
      return;
    this.favorite.items.push(new FavoriteItem(trip));
    this.setFavoriteToLocalStorage();
  }
  removeFromFavorite(trip: Trip): void {
    this.favorite.items = this.favorite.items.filter(item => item.trip.id !== trip.id);
  }
  changeQuantity(tripId: number, quantity: number): void {
    let favoriteItem = this.favorite.items.find(item => item.trip.id === tripId);
    if(!favoriteItem)
      return;
    favoriteItem.quantity = quantity;
    favoriteItem.price = favoriteItem.trip.price * quantity;
    this.setFavoriteToLocalStorage();
  }
  clearFavorite(){
    this.favorite = new Favorite();
    this.setFavoriteToLocalStorage();
  }
  getFavoriteObservable():Observable<Favorite>{
    return this.favoriteSubject.asObservable();
  }
  private setFavoriteToLocalStorage():void{
    this.favorite.totalPrice = this.favorite.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.favorite.totalCount = this.favorite.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
    const favoriteJson = JSON.stringify(this.favorite);
    localStorage.setItem('favorite', favoriteJson);
    this.favoriteSubject.next(this.favorite);
  }
  private getFavoriteFromLocalStorage():Favorite{
    const favoriteJson = localStorage.getItem('favorite');
    return favoriteJson ? JSON.parse(favoriteJson) : new Favorite();
  }

}
