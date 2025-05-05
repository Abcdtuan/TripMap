import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Route,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-page-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './page-detail.component.html',
  styleUrl: './page-detail.component.scss'
})
export class PageDetailComponent {

  tripId : number ;
  trip: any;
  constructor(private customerService:CustomerService, private activeRoute: ActivatedRoute, private router: Router) {
    this.tripId = this.activeRoute.snapshot.params['id'];
  }
  
  ngOnInit() {
    this.getTripById();
  }
  getTripById(id: number = this.tripId) {
    this.customerService.getTripById(id).subscribe((res) => {
      try {
        res.schedule = JSON.parse(res.schedule || '[]');
        res.combos = JSON.parse(res.combos || '[]');
        res.origin = JSON.parse(res.origin || '""');
        res.tag = JSON.parse(res.tag || '""');
      } catch (e) {
        console.error('Error parsing JSON:', e);
      }
      
      res.processedImg = 'data:image/jpeg;base64,' + res.returnedImage;
      this.trip = res;
      console.log('Trip data:', this.trip);
    });
  }
  goToComboOption(option: any) {
    const url = `customer/page-details/${this.tripId}/combo-option`;
    this.router.navigateByUrl(
      this.router.createUrlTree([url], {
        queryParams: {
          type: option.type,
          price: option.price,
          note: option.note
        }
      })
    );
  }

  
}
