import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'not-found',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  @Input()
  visible = false;
  @Input()
  notFoundMessage = 'Không tìm thấy trang';
  @Input()
  resetLinkText = "Quay lại trang chủ";
  @Input()
  resetLinkRoute = "/";
  constructor() {
  }
  

}
