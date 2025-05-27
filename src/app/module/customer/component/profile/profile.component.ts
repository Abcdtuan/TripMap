import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../services/customer.service'; // Adjust the path as needed
import { ActivatedRoute, Route,Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { StorageService } from '../../../../services/storage.service';



@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user : any={};
  loading: boolean = false;
  constructor(private customerService: CustomerService,private activeRoute: ActivatedRoute, private router: Router) {
     
  }
  goToEditProfile() {
    this.router.navigate(['/customer/update-profile']);
  }
  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
  this.loading = true;
  const localUser = StorageService.getUser();
  if (localUser) {
    this.user = localUser;
    this.loading = false;
  }
  this.customerService.getProfile().subscribe(
    (res) => {
      this.loading = false;
      try {
        res.name = typeof res.name === 'string' ? res.name : JSON.parse(res.name || '[]');
        res.email = typeof res.email === 'string' ? res.email : JSON.parse(res.email || '[]');
        res.phone = typeof res.phone === 'string' ? res.phone : JSON.parse(res.phone || '[]');
      } catch (e) {
        console.error('Error parsing JSON:', e);
      }
      this.user = res;
      console.log('User data:', this.user);

    },
    (error) => {
      this.loading = false;
      console.error('Error fetching profile:', error);
    }
  );
}}
