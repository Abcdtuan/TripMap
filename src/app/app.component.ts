import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {RouterOutlet,Router } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ReactiveFormsModule } from '@angular/forms';
import { StorageService } from './services/storage.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, RouterOutlet, HeaderComponent,ReactiveFormsModule,CommonModule,FormsModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hello-world';
  searchTerm: string = '';
   
  isAdminLoggedIn: boolean = StorageService.isAdminLoggedIn();
  isCustomerLoggedIn: boolean = StorageService.isCustomerLoggedIn();
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
        this.isCustomerLoggedIn = StorageService.isCustomerLoggedIn();
      }
    })
    
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

