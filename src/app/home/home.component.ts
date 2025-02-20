import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { TripService } from '../services/trip/trip.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  trip:String[] = [];
  constructor(private tripservice:TripService){
  }
  ngOnInit(): void{
    this.trip = this.tripservice.getAll();
  }
}
