import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TripService } from '../services/trip/trip.service';
import { Trip } from '../shared/models/Trip';
interface Location {
  id: number;
  name: string;
  province: string;
  price: number;
  rating: number;
  imageUrl: string;
}

@Component({
  selector: 'locations',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, CommonModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent implements OnInit {
  searchProvince: string = '';
  allTrips: Trip[] = [];
  trips: Trip[] = [];
  constructor(private tripServiece:TripService) {}

  locations: Location[] = []; // Mảng địa điểm ban đầu

  // Mảng lưu kết quả sau khi lọc
  filteredLocations: Location[] = [];

  ngOnInit(): void {
    // Lấy danh sách tất cả các chuyến đi từ dịch vụ
    this.allTrips = this.tripServiece.getAll();
    this.locations = this.allTrips.map((trip, index) => ({
      id: index + 1,
      name: trip.name,
      province: trip.origins[0],
      price: trip.price,
      rating: trip.stars,
      imageUrl: trip.imageUrl
    }));
    // Gán danh sách địa điểm ban đầu cho filteredLocations
    this.filteredLocations = this.locations;
  }

  // Hàm lọc theo từ khóa searchProvince
  filterLocations() {
    const searchTerm = this.searchProvince.toLowerCase().trim();
    this.filteredLocations = this.locations.filter(location =>
      location.province.toLowerCase().includes(searchTerm)
    );
  }

}
