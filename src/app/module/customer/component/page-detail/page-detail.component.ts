import { Component,  } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../../../services/storage.service';


@Component({
  selector: 'app-page-detail',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './page-detail.component.html',
  styleUrl: './page-detail.component.scss'
})
export class PageDetailComponent  {
  tripId: number; 
  trip: any = {}; 
  isFavorite: boolean = false;

  constructor(
    private customerService: CustomerService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    // Lấy tripId từ URL
    this.tripId = Number(this.activeRoute.snapshot.params['id']);
    
  }

  ngOnInit(): void {
    
    this.getTripById();
  }

  
  getTripById(id: number = this.tripId): void {
    this.customerService.getTripById(id).subscribe(
      (res) => {
        try {
          res.schedule = this.safeParseJSON(res.schedule, []);
          res.combos = this.safeParseJSON(res.combos, []);
          res.origin = this.safeParseJSON(res.origin, '');
          res.tag = this.safeParseJSON(res.tag, '');

          // Xử lý hình ảnh base64
          res.processedImg = 'data:image/jpeg;base64,' + res.returnedImage;

          // Gán dữ liệu vào biến trip
          this.trip = res;

          // Log dữ liệu để kiểm tra
          console.log('Trip data:', this.trip);
          console.log('Combos:', this.trip.combos);
        } catch (e) {
          console.error('Error processing trip data:', e);
        }
      },
      (error) => {
        console.error('Error fetching trip data:', error);
      }
    );
  }

  
  goToComboOption(combo: any,option: any): void {
    const url = `customer/page-details/${this.tripId}/combo-option`;
    this.router.navigateByUrl(
      this.router.createUrlTree([url], {
        queryParams: {
          comboId: combo.id,
          type: option.name,
          price: option.price,
          note: option.description
        }
      })
    );
  }

  
   
  private safeParseJSON(jsonString: string, defaultValue: any): any {
    try {
      return JSON.parse(jsonString || JSON.stringify(defaultValue));
    } catch (e) {
      console.error('Error parsing JSON:', e);
      return defaultValue;
    }
  }
  addToFavorite() {
    const userId = StorageService.getUserId();
    this.customerService.addToFavorite(userId, this.trip.id).subscribe({
      next: (res) =>{
        console.log('Added to favorite:', res);
        alert('Đã thêm vào mục yêu thích');
      },
      error: (err) => {
        console.error('Error adding to favorite:', err);
        alert('Thêm vào mục yêu thích thất bại');
        this.isFavorite = true;
      }
  })
  }
}