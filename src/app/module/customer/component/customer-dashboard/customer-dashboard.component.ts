import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.scss'
})
export class CustomerDashboardComponent {
  trips: any[] = [];
  allTrips: any[] = [];
  tags: string[] = [];
  selectedTag: string = '';
  selectedCombo: any = null;
  showOptions: boolean = false;

  constructor(private customerService:CustomerService,private route:ActivatedRoute) {}

  ngOnInit() {
    this.getAllTrips(() => {
      this.route.queryParams.subscribe(params => {
        console.log('Query Params:', params);
        const tag = params['tag'];
        if (tag) {
          this.selectedTag = tag;
          this.trips = this.allTrips.filter(trip => 
            trip.tag.replace(/"/g, '').trim() === tag.trim()
          );
          console.log('Filtered Trips:', this.trips); // Kiểm tra danh sách trips sau khi lọc
        } else {
          this.selectedTag = '';
          this.trips = this.allTrips;
          console.log('All Trips:', this.trips); // Hiển thị tất cả nếu không có tag
        }
      });
    });
  }
  
  
  getAllTrips(callback?: () => void) {
    this.customerService.getAllTrips().subscribe((res) => {
      console.log(res);
      this.allTrips = res.map((element: any) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        return element;
      });
      this.trips = [...this.allTrips]; // Hiển thị tất cả trips ban đầu
      this.tags = Array.from(new Set(this.allTrips.map(trip => trip.tag.replace(/"/g, '').trim()))); // Lấy danh sách tag duy nhất
      console.log('All Trips:', this.allTrips);
      console.log('Tags:', this.tags);
      if (callback) callback(); // Gọi callback sau khi dữ liệu được tải
    });
  }
  

}
