import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// ng generate component app-title

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user = {
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
    bio: 'Lập trình viên front-end yêu thích Angular và UI/UX.'
  };
}
