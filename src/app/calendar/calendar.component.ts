import { Component,EventEmitter,Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  @Output() dateSelected = new EventEmitter<string>();
  currentDate = new Date();
  selectedDate: Date | null = null;
  days: { date: Date, label: string }[] = [];

  ngOnInit() {
    this.generateDays();
  }

  generateDays() {
    this.days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) { 
      let nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      this.days.push({
        date: nextDay,
        label: `tháng ${nextDay.getMonth() + 1} ${nextDay.getDate()}`
      });
    }
  }

  selectDate(day: Date) {
    this.selectedDate = day;
    this.dateSelected.emit(day.toISOString().split('T')[0]); 
  }

}
