import { Injectable } from '@angular/core';
import { Trip } from '../../shared/models/Trip';
@Injectable({
  providedIn: 'root',
})
export class TripService {
  constructor() {}

  getAll(): Trip[] {
    return [
      {
        id: 1,
        name: 'Bãi tắm tuần châu',
        origins: ['Quảng ninh'],
        stars: 5,
        imageUrl: 'assets/Sun-World-Ba-Na-Hills-in-Da-.webp',
        tag: ['Du lịch biển đảo'],
        favorite: false,
      },
      {
        id: 2,
        name: 'Đảo',
        origins: ['Quảng ninh'],
        stars: 4.8,
        imageUrl: 'assets/TTC-Doc-Let-Beach-Tiny-Zoo-Nha-Trang.webp',
        tag: ['Du lịch biển đảo'],
        favorite: true,
      },
      {
        id: 3,
        name: 'Vịnh hạ long',
        origins: ['Quảng ninh'],
        stars: 2,
        imageUrl: 'assets/images1.jpg',
        tag: ['Du lịch biển đảo'],
        favorite: false,
      },
      {
        id: 4,
        name: 'Nghĩa trang liệt sĩ quốc gia',
        origins: ['Quảng ninh'],
        stars: 4.2,
        imageUrl: 'assets/Robin-Hill-Cable-Car.webp',
        tag: ['Du lịch tâm linh'],
        favorite: false,
      },
      {
        id: 5,
        name: 'Nhà thờ lớn nam định',
        origins: ['Nam định'],
        stars: 4.5,
        imageUrl: 'assets/Samten-Hills-Da-Lat-.webp',
        tag: ['Du lịch tâm linh'],
        favorite: false,
      },
      {
        id: 6,
        name: 'Thung lũng sùng là',
        origins: ['Hà giang'],
        stars: 4.5,
        imageUrl: 'assets/Linh-Ung-Pagoda-Marble-Mountains-and-Hoi-An.webp',
        tag: ['Du lịch trải nghiệm'],
        favorite: true,
      }
    ];
  }
  getTripById(tripId: number): Trip {
    return this.getAll().find(trip => Number(trip.id) === tripId) ?? new Trip();
  }
}
