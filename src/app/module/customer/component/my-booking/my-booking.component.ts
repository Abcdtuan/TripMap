import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-my-booking',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './my-booking.component.html',
  styleUrl: './my-booking.component.scss'
})
export class MyBookingComponent {
  bookings: any[] = [];
  
 

  constructor(private customerService: CustomerService) {
    this.getMyBookings();
  }

  getMyBookings() {
    this.customerService.getBookingByUserId().subscribe((res) => {
      this.bookings = res;
      console.log(res);
    })
  }

}
