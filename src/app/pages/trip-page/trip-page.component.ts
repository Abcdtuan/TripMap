import { Component } from '@angular/core';
import { Trip } from '../../shared/models/Trip';
import { TripService } from '../../services/trip/trip.service';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { StarRatingComponent } from "../../star-rating/star-rating.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-trip-page',
  standalone: true,
  imports: [MatIconModule, StarRatingComponent,CommonModule],
  templateUrl: './trip-page.component.html',
  styleUrl: './trip-page.component.scss'
})
export class TripPageComponent {
  trip!: Trip;
  constructor(activatedRoute:ActivatedRoute, tripService:TripService){
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        const tripId = Number(params['id']);
        this.trip = tripService.getTripById(tripId)
      }
    })
}
}