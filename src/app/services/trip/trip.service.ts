import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor() { }

  getAll():String[]{
    return [
      'assets/bai-tam-tuan-chau.jpg',
      'assets/dao-thanh-lan.jpeg',
      'assets/images1.jpg',
      'assets/nghia-trang-liet-si-quoc-gia-vi-xuyen.jpeg',
      'assets/nha-tho-lon-nam-dinh.webp',
      'assets/thung-lung-sung-la.webp'
    ]
  }
}
