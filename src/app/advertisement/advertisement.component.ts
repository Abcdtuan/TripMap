import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advertisement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent {
  images = [
    { src: 'assets/Advertisement1.webp', alt: 'Advertisement 1' },
    { src: 'assets/Advertisement2.webp', alt: 'Advertisement 2' },
    { src: 'assets/advertisement5.webp', alt: 'advertisement 5' },
    { src: 'assets/Advertisement4.webp', alt: 'Advertisement 4' }
  ];
  currentIndex = 0;

  constructor() {
    this.startSlideShow();
  }

  startSlideShow() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Chuyển ảnh mỗi 3 giây
  }
}
