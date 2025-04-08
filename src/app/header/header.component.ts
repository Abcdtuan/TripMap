import { Component,} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FavoriteComponent } from '../favorite/favorite.component';
import { NgFor, NgIf } from '@angular/common';
import { OnInit } from '@angular/core';
import { FavoriteService } from '../services/trip/favorite.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,FormsModule,RouterLink, FavoriteComponent, NgFor, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  
  searchTerm: string = '';
  favoriteCount = 0;
  constructor(private router: Router, favoriteSevice: FavoriteService) {
    favoriteSevice.getFavoriteObservable().subscribe((favorite) => {
      this.favoriteCount = favorite.totalCount;
    })
  } 
  ngOnInit(): void {
  }

  search() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/'], { queryParams: { searchTerm: this.searchTerm } }); 
    }
  }
}
