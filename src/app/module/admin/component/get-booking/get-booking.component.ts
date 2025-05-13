import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-get-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-booking.component.html',
  styleUrl: './get-booking.component.scss'
})
export class GetBookingComponent {
  bookings: any[] = [];
  isSpinning = false;

  constructor(private adminService: AdminService) {
    this.getBookings();
  }
  getBookings(){
    this.adminService.getTripBookings().subscribe((res) => {
      this.isSpinning = false;
      console.log(res);
      this.bookings = res;
    })
  }
  changeBookingTripStatus(bookingId: number, status: string) {
  this.isSpinning = true;
  console.log(bookingId, status);
  this.adminService.changeBookingTripStatus(bookingId, status).subscribe({
    next: (res) => {
      this.isSpinning = false;
      console.log(res);
      this.getBookings();
      alert('Trạng Thái Đặt Chỗ Cập Nhật Thành Công');
    },
    error: (err) => {
      this.isSpinning = false;
      console.error(err);
      alert('Trạng Thái Đặt Chỗ Cập Nhật Thất Bại');
    }
  });
}

}
