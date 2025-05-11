import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTripComponent } from './booking-trip.component';

describe('BookingTripComponent', () => {
  let component: BookingTripComponent;
  let fixture: ComponentFixture<BookingTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingTripComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
