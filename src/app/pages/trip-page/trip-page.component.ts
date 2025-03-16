import { FavoriteService } from './../../services/trip/favorite.service';
import { Component } from '@angular/core';
import { Trip } from '../../shared/models/Trip';
import { TripService } from '../../services/trip/trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { StarRatingComponent } from "../../star-rating/star-rating.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-trip-page',
  standalone: true,
  imports: [MatIconModule, StarRatingComponent, CommonModule, RouterLink],
  templateUrl: './trip-page.component.html',
  styleUrl: './trip-page.component.scss'
})
export class TripPageComponent {
  trip!: Trip;
  days: { date: Date; label: string }[] = [];
  selectedDate: Date | null = null;
  constructor(activatedRoute:ActivatedRoute, tripService:TripService,private favoriteService:FavoriteService,private router: Router ) {
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        const tripId = Number(params['id']);
        this.trip = tripService.getTripById(tripId);
        this.generateDays();
      }
    })
  }
  generateDays() {
    const today = new Date();
    this.days = [];
    for (let i = 0; i < 7; i++) {
      let nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      this.days.push({
        date: nextDay,
        label: `${nextDay.getDate()} thg ${nextDay.getMonth() + 1}`,
      });
    }
  }

  selectDate(day: { date: Date; label: string }) {
    this.selectedDate = day.date; 
  }

  bookTicket(combo: any) {
    if (!this.selectedDate) {
      alert('Vui lòng chọn ngày trước khi đặt vé!');
      return;
    }
    console.log(`Đặt vé: ${combo.name} vào ngày ${this.selectedDate}`);
  }
  addToFavorite() {
    this.favoriteService.addToFavorite(this.trip);
    this.router.navigate(['/favorite-page']);
    console.log("Đã thêm vào yêu thích, chuyển hướng...");
    this.router.navigate(['/favorite-page'])
  }
}