import { Component } from '@angular/core';
import { Favorite } from '../shared/models/Favorite';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from '../services/trip/favorite.service';
import { TripService } from '../services/trip/trip.service';
import { FavoriteItem } from '../shared/models/FavoriteItem';
import { AppTitleComponent } from '../app-title/app-title.component';
import { CommonModule } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [AppTitleComponent,CommonModule, NgFor, RouterLink, NotFoundComponent, NgIf],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {
  favorite!: Favorite;
  constructor(private favoriteService: FavoriteService, private tripService: TripService, private activatedRoute: ActivatedRoute) {
    // Lấy danh sách yêu thích từ dịch vụ
    this.favoriteService.getFavoriteObservable().subscribe((favorite) => {
      this.favorite = favorite;
    });
  }
  
  removeFromFavorite(favoriteItem : FavoriteItem) {
    // Xóa một chuyến đi khỏi danh sách yêu thích
    this.favoriteService.removeFromFavorite(favoriteItem.trip);
  }
  changeQuantity(favoriteItem: FavoriteItem, quantity: string) {
    // Chuyển đổi chuỗi số thành số nguyên
    const quantityNumber = parseInt(quantity);
    this.favoriteService.changeQuantity(favoriteItem.trip.id, quantityNumber);
  }
}
