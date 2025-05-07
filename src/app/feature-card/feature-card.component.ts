import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class FeatureCardComponent {
  features = [
    {
      icon: 'assets/Image1.webp',
      title: 'Vô vàn lựa chọn',
      description: 'Tìm kiếm niềm vui với gần nửa triệu điểm tham quan, phòng khách sạn và nhiều trải nghiệm thú vị',
    },
    {
      icon: 'assets/Image2.webp',
      title: 'Chơi vui, giá tốt',
      description: 'Trải nghiệm chất lượng với giá tốt. Tích lũy coin để được thêm ưu đãi',
    },
    {
      icon: 'assets/Image1.webp',
      title: 'Dễ dàng và tiện lợi',
      description: 'Đặt vé xác nhận ngay, miễn xếp hàng, miễn phí hủy, tiện lợi cho bạn tha hồ khám phá',
    },
    {
      icon: 'assets/Image2.webp',
      title: 'Đáng tin cậy',
      description: 'Tham khảo đánh giá chân thực. Dịch vụ hỗ trợ tận tình, đồng hành cùng bạn mọi lúc, mọi nơi',
    },
  ];
}
