import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-title',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './app-title.component.html',
  styleUrl: './app-title.component.scss'
})
export class AppTitleComponent {
  constructor() { }

  @Input()
  title!: string;

  @Input()
  margin? = '1rem 0 1rem 0.2rem';

  @Input()
  fontSize? = '1.5rem';
}
