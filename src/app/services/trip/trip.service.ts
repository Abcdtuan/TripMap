import { Injectable } from '@angular/core';
import { Trip } from '../../shared/models/Trip';
import { Tag } from '../../shared/models/tag';
import { sample_tags, sample_trips } from '../../../data';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  constructor() {}

  getAll(): Trip[] {
    return sample_trips;
  }
  getTripById(tripId: number): Trip {
    return this.getAll().find(trip => Number(trip.id) === tripId) ?? new Trip();
  }
  getAllTags(): Tag[] {
    return sample_tags;
  }
  getAllTripsByTag(tag: string): Trip[] {
    return tag === "All"?
    this.getAll():
    this.getAll().filter(trip => trip['tag'].includes(tag));
  }
}

