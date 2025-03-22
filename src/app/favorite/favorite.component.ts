import { Component } from '@angular/core';
import { Favorite } from '../shared/models/Favorite';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from '../services/trip/favorite.service';
import { TripService } from '../services/trip/trip.service';
import { FavoriteItem } from '../shared/models/FavoriteItem';
import { AppTitleComponent } from '../app-title/app-title.component';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [AppTitleComponent,CommonModule, NgFor, RouterLink],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {
  favorite!: Favorite;
  constructor(private favoriteService: FavoriteService, private tripService: TripService, private activatedRoute: ActivatedRoute) {
    this.favoriteService.getFavoriteObservable().subscribe((favorite) => {
      this.favorite = favorite;
    });
  }
  removeFromFavorite(favoriteItem : FavoriteItem) {
    this.favoriteService.removeFromFavorite(favoriteItem.trip);
  }
  changeQuantity(favoriteItem: FavoriteItem, quantityToString: string) {
    const quantity = parseInt(quantityToString);
    this.favoriteService.changeQuantity(favoriteItem.trip.id, quantity);
  }
}
