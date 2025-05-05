import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.scss'
})
export class CustomerDashboardComponent {
  trips: any[] = [];
  selectedCombo: any = null;
  showOptions: boolean = false;

  constructor(private customerService:CustomerService) {}

  ngOnInit() {
    this.getAllTrips();
  }
  getAllTrips() {
    this.trips = []; 
    this.customerService.getAllTrips().subscribe((res) => {
      console.log(res);
      res.forEach((element: any) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.trips.push(element);
      });
    });
  }
  

  

}
