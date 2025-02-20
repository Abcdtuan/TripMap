
import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hello-world';
 
}

