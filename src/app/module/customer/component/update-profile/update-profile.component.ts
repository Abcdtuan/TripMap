import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service'; // Adjust the path as needed
import { ActivatedRoute, Route,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../../../services/storage.service';
@Component({
  selector: 'app-update-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.scss'
})
export class UpdateProfileComponent {
  user : any={};
  oldEmail: string = '';
  loading: boolean = false;
  constructor(private customerService: CustomerService,private activeRoute: ActivatedRoute, private router: Router) {
      
  }
          

ngOnInit() {
  this.customerService.getProfile().subscribe((res) => {
    this.user = res;
    this.oldEmail = res.email;
  });
}

updateProfile() {
console.log('Thông tin chuẩn bị của người dùng gửi đi:', this.user); 

  this.customerService.putProfile(this.user).subscribe({
  next: (res) => {
    // Nếu user đổi email, bắt buộc logout
    if (this.user.email !== this.oldEmail) {
        alert('Bạn đã đổi email. Vui lòng đăng nhập lại!');
        StorageService.logout();
        this.router.navigate(['/account/login']);
        return;
      }
    // Cập nhật lại localStorage nếu chỉ đổi tên
    const currentUser = StorageService.getUser();
    if (currentUser) {
      currentUser.name = this.user.name;
      StorageService.saveUser(currentUser);
    }
    alert('Cập nhật thành công!');
    this.router.navigate(['/customer/profile']);
  },
  error: (err) => {
    alert('Cập nhật thất bại!');
    console.error('Lỗi cập nhật:', err);
  }
});
}
}
