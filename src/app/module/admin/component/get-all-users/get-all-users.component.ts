import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-get-all-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-all-users.component.html',
  styleUrl: './get-all-users.component.scss'
})
export class GetAllUsersComponent {
  user: any[] = [];
  constructor(private adminService: AdminService) { }
  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.user = [];
    this.adminService.getAllUsers().subscribe((res) => {
      console.log(res);
      res.forEach((element: any) => {
        this.user.push(element);
      });
    })
  }
  deleteUser(id: number) {
    this.adminService.deleteUser(id).subscribe(() => {
      alert('Xóa user thành công!');
      this.getAllUsers();
    }, error => {
      console.error('Xóa user thất bại', error);
    });
  }
}
