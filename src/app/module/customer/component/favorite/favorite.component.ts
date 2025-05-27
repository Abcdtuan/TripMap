import { CustomerService } from '../../services/customer.service';
import { Component } from '@angular/core';
import { StorageService } from '../../../../services/storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {
   favoriteTrips: any[] = []; // Danh sách yêu thích

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getFavoriteTrips(); // Lấy danh sách yêu thích khi component khởi tạo
  }

  // Lấy danh sách yêu thích
  getFavoriteTrips() {
    const userId = StorageService.getUserId(); // Lấy userId từ localStorage
    this.customerService.getFavoriteItems(userId).subscribe({
      next: (res) => {
        this.favoriteTrips = res; // Gán dữ liệu từ API vào biến
        console.log('Danh sách yêu thích:', this.favoriteTrips);
      },
      error: (err) => {
        console.error('Lỗi khi lấy danh sách yêu thích:', err);
      }
    });
  }

  // Xóa khỏi danh sách yêu thích
  removeFromFavorite(favoriteId: number) {
    this.customerService.removeFromFavorite(favoriteId).subscribe({
      next: () => {
        // Xóa thành công, cập nhật lại danh sách
        this.favoriteTrips = this.favoriteTrips.filter(item => item.id !== favoriteId); // Sử dụng id
        alert('Đã xóa khỏi danh sách yêu thích!');
      },
      error: (err) => {
        console.error('Lỗi khi xóa khỏi danh sách yêu thích:', err);
        alert('Xóa khỏi danh sách yêu thích thất bại!');
      }
    });
    }
}
