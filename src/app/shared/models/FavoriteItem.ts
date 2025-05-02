import { Trip } from "./Trip";

export class FavoriteItem{
    quantity: number = 1;
    price: number;
    
    constructor(public trip: Trip) {
        this.price = this.trip.price;
    }
    
}