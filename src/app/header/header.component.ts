import { Component,} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,FormsModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  searchTerm: string = '';
  constructor(private router: Router) {} 

  search() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/'], { queryParams: { searchTerm: this.searchTerm } }); 
    }
  }
}
