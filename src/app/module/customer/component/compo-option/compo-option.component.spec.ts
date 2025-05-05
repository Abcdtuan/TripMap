import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoOptionComponent } from './compo-option.component';

describe('CompoOptionComponent', () => {
  let component: CompoOptionComponent;
  let fixture: ComponentFixture<CompoOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
