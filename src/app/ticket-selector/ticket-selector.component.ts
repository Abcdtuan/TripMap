import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Combo, Trip } from '../shared/models/Trip';
import { CommonModule } from '@angular/common';
import { sample_trips } from '../../data';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ticket-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-selector.component.html',
  styleUrl: './ticket-selector.component.scss'
})
export class TicketSelectorComponent {
  trip!: Trip;
  combo!: Combo;
  
  adultCount: number = 1;
  childCount: number = 0;
  totalPrice: number = 0;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const tripId = Number(params['id']);
      this.trip = sample_trips.find(t => t.id === tripId)!;
    });

    this.route.queryParams.subscribe(params => {
      const comboId = Number(params['comboId']);
      const allCombos = this.trip?.combos || [];
      this.combo = allCombos.find((c: any) => c.id === comboId)!;

      // Tính tổng ban đầu
      if (this.combo) {
        this.calculateTotal();
      }
    });
  }

  updateAdultCount(count: number) {
    if (this.adultCount + count >= 1) {
      this.adultCount += count;
      this.calculateTotal();
    }
  }

  updateChildCount(count: number) {
    if (this.childCount + count >= 0) {
      this.childCount += count;
      this.calculateTotal();
    }
  }

  calculateTotal() {
    if (!this.combo?.options || this.combo.options.length < 2) return;

    const adultOption = this.combo.options.find(o => o.label === "Người lớn");
    const childOption = this.combo.options.find(o => o.label === "Trẻ em");

    if (!adultOption || !childOption) return;

    this.totalPrice = (adultOption.price * this.adultCount) + (childOption.price * this.childCount);
  }

  confirmBooking() {
    alert('Đặt vé thành công!');
  }
  
}
