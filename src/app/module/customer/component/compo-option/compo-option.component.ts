import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../services/customer.service';
import { StorageService } from '../../../../services/storage.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compo-option',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './compo-option.component.html',
  styleUrl: './compo-option.component.scss'
})
export class CompoOptionComponent {
  type = '';
  price = 0;
  note = '';
  quantity = 1; // Số người
  bookingDate: string = ''; // Ngày đặt tour
  ValidateForm!: FormGroup;
  isSpinning = false;
  tripId: string = ''; // Lưu tripId từ route parameters
  comboId: string = ''; // Lưu comboId từ query parameters

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) {
    // Lấy tripId từ route parameters
    this.tripId = this.route.snapshot.params['id'];
    console.log('Trip ID từ route parameters:', this.tripId);

    // Lấy các query parameters khác
    this.route.queryParams.subscribe((params) => {
      this.comboId = params['comboId'];
      this.type = params['type'];
      this.price = +params['price'];
      this.note = params['note'];
    });
  }

  ngOnInit() {
    this.ValidateForm = this.fb.group({});
  }

  bookingTrip() {
    if (!this.bookingDate || this.quantity <= 0) {
      console.error('Vui lòng nhập đầy đủ thông tin!');
      return;
    }

    this.isSpinning = true;

    const userId = StorageService.getUserId();

    // Tạo DTO để gửi lên backend
    const bookingTripDto = {
      userId: userId,
      tripId: this.tripId, 
      comboId: this.comboId, 
      bookingDate: this.bookingDate,
      numberOfPeople: this.quantity,
      price: this.total 
    };

    console.log('Dữ liệu gửi lên backend:', bookingTripDto);

    this.customerService.bookingTrip(bookingTripDto).subscribe({
      next: (res) => {
        alert('Đặt tour thành công!');
        this.router.navigateByUrl('/customer/customer-dashboard');
        console.log('Đặt tour thành công:', res);
        this.isSpinning = false;
      },
      error: (err) => {
        alert('Đặt tour thất bại! Vui lòng thử lại sau.');
        console.error('Lỗi khi đặt tour:', err);
        this.isSpinning = false;
      }
    });
  }

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) this.quantity--;
  }

  get total() {
    return this.price * this.quantity;
  }
}