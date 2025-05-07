import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { AdvertisementComponent } from "../../../../advertisement/advertisement.component";
import { FooterComponent } from '../../../../footer/footer.component';
import { PromotionComponent } from '../../../../promotion/promotion.component';
import { FeatureCardComponent } from '../../../../feature-card/feature-card.component';


@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, AdvertisementComponent, FooterComponent, PromotionComponent,FeatureCardComponent],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.scss'
})
export class CustomerDashboardComponent {
  trips: any[] = [];
  allTrips: any[] = [];
  tags: string[] = [];
  searchTerm: string = '';
  selectedTag: string = '';
  selectedCombo: any = null;
  showOptions: boolean = false;

  constructor(private customerService:CustomerService,private route:ActivatedRoute) {}

  ngOnInit() {
    this.getAllTrips(() => {
      this.route.queryParams.subscribe(params => {
        console.log('Query Params:', params);
        const tag = params['tag'];
        const origin = params['origin'];
        const searchTerm = params['searchTerm'];
  
        if (tag) {
          this.selectedTag = tag;
          this.trips = this.allTrips.filter(trip => 
            trip.tag.replace(/"/g, '').trim() === tag.trim()
          );
          console.log('Filtered Trips by Tag:', this.trips);
        } else if (origin) {
          this.trips = this.allTrips.filter(trip => 
            trip.origin.replace(/"/g, '').trim() === origin.trim()
          );
          console.log('Filtered Trips by Origin:', this.trips);
        } else if (searchTerm) {
          const normalizedSearchTerm = searchTerm.trim().toLowerCase();
          this.trips = this.allTrips.filter(trip => 
            trip.name.toLowerCase().includes(normalizedSearchTerm)
          );
          console.log('Filtered Trips by Search Term:', this.trips);
        } else {
          this.selectedTag = '';
          this.trips = this.allTrips;
          console.log('All Trips:', this.trips);
        }
      });
    });
  }
  
  
  getAllTrips(callback?: () => void) {
    this.customerService.getAllTrips().subscribe((res) => {
      console.log(res);
      this.allTrips = res.map((element: any) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        element.tag = element.tag.replace(/"/g, '').trim(); // Chuẩn hóa tag
        element.origin = element.origin.replace(/"/g, '').trim(); // Chuẩn hóa origin
        return element;
      });
      this.trips = [...this.allTrips]; // Hiển thị tất cả trips ban đầu
      this.tags = Array.from(new Set(this.allTrips.map(trip => trip.tag))); // Lấy danh sách tag duy nhất
      console.log('All Trips:', this.allTrips);
      console.log('Tags:', this.tags);
      if (callback) callback(); // Gọi callback sau khi dữ liệu được tải
    });
  }
  

}
