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
    const exists = this.favorite.items.some(item => item.trip.id === trip.id);
    if (exists) {
      console.log("Chuyến đi đã có trong danh sách yêu thích.");
      return;
    }

    this.favorite.items.push(new FavoriteItem(trip));
    this.setFavoriteToLocalStorage();
    console.log("Đã thêm vào danh sách yêu thích.");
  }
  removeFromFavorite(trip: Trip): void {
    this.favorite.items = this.favorite.items.filter(item => item.trip.id !== trip.id);
    this.setFavoriteToLocalStorage();
  }
  changeQuantity(tripId: number, quantity:number): void {
    let favoriteItem = this.favorite.items.find(item => item.trip.id === tripId);
    if(!favoriteItem)
      return;
    favoriteItem.price = favoriteItem.trip.price ;
    favoriteItem.quantity = favoriteItem.quantity + quantity;
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
  private getFavoriteFromLocalStorage(): Favorite{
    if (typeof window === 'undefined') 
      return new Favorite();
    const data = localStorage.getItem('favorite');
    if (data) {
      const parsed = JSON.parse(data);
      const favorite = Object.assign(new Favorite(), parsed);
      favorite.items = favorite.items.map((item: { trip: Trip; }) =>
        Object.assign(new FavoriteItem(item.trip), item)
      );
      return favorite;
    }
    return new Favorite();
  }

}
