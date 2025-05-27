import { Component,} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { FavoriteService } from '../services/trip/favorite.service';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../module/customer/services/customer.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,FormsModule,RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  searchTerm: string = '';
  name: any;
  favoriteCount = 0;
  constructor(private router: Router, favoriteSevice: FavoriteService, private customerService: CustomerService) {
    favoriteSevice.getFavoriteObservable().subscribe((favorite) => {
    this.favoriteCount = favorite.totalCount;
    })
  }
      

  
  ngOnInit(): void {
    this.name = StorageService.getUserName();
      
  }
  logout(){
    StorageService.logout();
    this.router.navigate(['/account/login']);
  }
 
  search() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/'], { queryParams: { searchTerm: this.searchTerm } }); 
    }
  }
  
}
