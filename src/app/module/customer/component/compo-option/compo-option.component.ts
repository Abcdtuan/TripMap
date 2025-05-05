import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compo-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compo-option.component.html',
  styleUrl: './compo-option.component.scss'
})
export class CompoOptionComponent {
  type = '';
  price = 0;
  note = '';
  quantity = 1;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.type = params['type'];
      this.price = +params['price'];
      this.note = params['note'];
    });
  }
  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 0) this.quantity--;
  }

  get total() {
    return this.price * this.quantity;
  }

}
