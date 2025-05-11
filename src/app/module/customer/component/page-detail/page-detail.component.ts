import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './page-detail.component.html',
  styleUrl: './page-detail.component.scss'
})
export class PageDetailComponent  {
  tripId: number; // ID của trip lấy từ URL
  trip: any = {}; // Lưu thông tin trip

  constructor(
    private customerService: CustomerService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    // Lấy tripId từ URL
    this.tripId = Number(this.activeRoute.snapshot.params['id']);
    
  }

  ngOnInit(): void {
    // Gọi API để lấy thông tin trip
    this.getTripById();
  }

  /**
   * Gọi API để lấy thông tin trip theo ID
   * @param id ID của trip (mặc định là this.tripId)
   */
  getTripById(id: number = this.tripId): void {
    this.customerService.getTripById(id).subscribe(
      (res) => {
        try {
          // Parse các trường JSON nếu có
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

  /**
   * Điều hướng đến trang combo-option với queryParams
   * @param option Combo option được chọn
   */
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

  /**
   * Hàm an toàn để parse JSON
   * @param jsonString Chuỗi JSON cần parse
   * @param defaultValue Giá trị mặc định nếu parse lỗi
   * @returns Giá trị đã parse hoặc giá trị mặc định
   */
  private safeParseJSON(jsonString: string, defaultValue: any): any {
    try {
      return JSON.parse(jsonString || JSON.stringify(defaultValue));
    } catch (e) {
      console.error('Error parsing JSON:', e);
      return defaultValue;
    }
  }
}