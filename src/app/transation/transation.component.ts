import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Booking {
  id: string;
  tourName: string;
  bookingDate: string;
  totalPrice: number;
  status: 'Đã thanh toán' | 'Đã huỷ' | 'Đang xử lý';
}
@Component({
  selector: 'app-transation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transation.component.html',
  styleUrl: './transation.component.scss'
})
export class TransationComponent {
  bookings: Booking[] = [
    {
      id: 'ORD123456',
      tourName: 'Du lịch Đà Nẵng 3N2Đ',
      bookingDate: '2025-03-20',
      totalPrice: 3200000,
      status: 'Đã thanh toán'
    },
    {
      id: 'ORD123457',
      tourName: 'Tour Hà Giang mùa hoa tam giác mạch',
      bookingDate: '2025-03-15',
      totalPrice: 2500000,
      status: 'Đã huỷ'
    },
    {
      id: 'ORD123458',
      tourName: 'Khám phá Phú Quốc 4N3Đ',
      bookingDate: '2025-03-10',
      totalPrice: 4500000,
      status: 'Đang xử lý'
    }
  ];
}
