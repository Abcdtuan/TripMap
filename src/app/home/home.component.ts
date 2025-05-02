
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { TripService } from '../services/trip/trip.service';
import { Trip } from '../shared/models/Trip';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StarRatingComponent } from "../star-rating/star-rating.component";
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import e from 'express';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, ReactiveFormsModule, FormsModule, StarRatingComponent, RouterModule, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  trips:Trip[] = [];
  allTrips: Trip[] = [];
  constructor(private tripservice:TripService, private route:ActivatedRoute) {
  }
  ngOnInit(): void{
    this.allTrips = this.tripservice.getAll(); 
    this.route.queryParams.subscribe(params => { 
      const searchTerm = params['searchTerm']?.trim();
      const tag = params['tag'];
      const origin = params['origin'];
      if (searchTerm) {
        const normalizedSearchTerm = this.normalizeString(searchTerm);
        this.trips = this.allTrips.filter(trip => 
          this.normalizeString(trip.name).includes(normalizedSearchTerm)
        );
      } 
      else if (tag) {
        this.trips = this.tripservice.getAllTripsByTag(tag);
      }
      else if (origin) {
        this.trips = this.tripservice.getAllTripsByOrigin(origin);
      }
      else {
        this.trips = this.allTrips;
      }
    });
  }

  normalizeString(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
}
