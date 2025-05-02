import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { StorageService } from '../../../../services/storage.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

  trips: any[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getAllTrips();
  }
  getAllTrips() {
    this.trips = []; 
    this.adminService.getAllTrips().subscribe((res) =>{
      console.log(res);
      res.forEach((element: any) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.trips.push(element);
        
      });
    })
  }
  deleteTrip(id: number) {
    if(confirm('Bạn có chắc muốn xóa chuyến đi này?')) {
      this.adminService.deleteTrip(id).subscribe({
        next: (res) => {
          this.trips = this.trips.filter(trip => trip.id !== id); // Cập nhật UI ngay lập tức
          alert('Xóa chuyến đi thành công!');
        },
        error: (err: any) => {
          console.error('Error details:', err);
          if (err.status === 404) {
            alert('Không tìm thấy chuyến đi để xóa!');
          } else if (err.status === 403) {
            alert('Bạn không có quyền xóa!');
          } else {
            alert('Đã có lỗi xảy ra khi xóa: ' + err.message);
          }
        }
      });
    }
  }
 

}



