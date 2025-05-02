import { Injectable } from '@angular/core';
import { Trip } from '../../shared/models/Trip';
import { Tag } from '../../shared/models/tag';
import { sample_origins, sample_tags, sample_trips } from '../../../data';
import { Origin } from '../../shared/models/origin';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  getTrip(arg0: any): import("../../shared/models/Favorite").Favorite {
    throw new Error('Method not implemented.');
  }
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
  getAllTripsByOrigin(origin: string): Trip[] {
    return origin === "All"?
    this.getAll():
    this.getAll().filter(trip => trip['origin'].includes(origin));
  }
}

