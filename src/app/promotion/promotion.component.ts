import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'], 
  standalone: true,
  imports: [CommonModule],
})
export class PromotionComponent {
  promotions = [
    {
      image: 'assets/Image1.webp',
      title: 'Xem blog của Tôi',
      description: 'Tôi gợi ý cho bạn các xu hướng du lịch, lịch trình chi tiết và các mẹo',
      buttonText: 'Xem ngay',
    },
    {
      image: 'assets/Image2.webp',
      title: 'Tiết kiệm hơn với credit',
      description: 'Tìm hiểu cách đặt hoạt động với giá siêu tiết kiệm bằng cách để lại đánh giá',
      buttonText: 'Credit là gì?',
    },
    {
      image: 'assets/Images3.web.jpg',
      title: 'Nhận ưu đãi khi mời bạn bè',
      description: 'Sau khi bạn của bạn đăng ký và hoàn thành đơn hàng đầu tiên, bạn sẽ nhận được điểm thưởng',
      buttonText: 'Mời bạn bè',
    },
  ];
}
