import { Trip } from "./Trip";

export class FavoriteItem{
    quantity: number = 0;
    price: number;

    constructor(public trip: Trip) {
        this.price = trip.price; 
    };
    
}