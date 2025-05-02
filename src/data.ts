import { Origin } from "./app/shared/models/origin";
import { Tag } from "./app/shared/models/tag";
import { Trip } from "./app/shared/models/Trip";
export const sample_trips: Trip[] = [
    {
        id: 1,
        name: 'Cầu vàng',
        price: 927000,
        origin: ['Đà Nẵng'],
        stars: 5,
        imageUrl: 'assets/Sun-World-Ba-Na-Hills-in-Da-.webp',
        tag: ['Du lịch trải nghiệm'],
        information: ['Cầu vàng là một công trình nổi tiếng tại Việt Nam,Tận hưởng khung cảnh tuyệt vời của đỉnh Bà Nà đứng trên cầu Vàng, một trong những chiếc cầu đẹp nhất thế giới'],
        schedule: [
      ],
      combos: [
        {
        id: 1,
        name: 'Vé vào cửa + Bà Nà Brew House', 
        description: [
          '1 vé vào cửa Bà Nà Hills',
          'Cáp treo khứ hồi',
          'Vé vào cửa Bà Nà Brew House'
        ],
        options: [
          {
            label: "Người lớn",
            price: 927000,
            note: "Trên 140 cm"
          },
          {
            label: "Trẻ em",
            price: 446500,
            note: "100 - 140 cm"
          }
        ]
        },
        {
          id: 2,
          name: 'COMBO: Vé vào cửa & Bana Brew House & Vé xe shuttle bus khứ hồi từ Đà Nẵng', 
          description: [
            'Vé cáp treo khứ hồi dành cho 1 khách',
            'Vé vào cổng Bana Brew House (Khách trên 18 tuổi được thưởng thức Sun KraftBeer sản xuất độc quyền tại Bà Nà',
            'Vé tàu hỏa leo núi dành cho 1 khách',
            'Vé vào cổng Bà Nà Hills dành cho 1 khách',
            'Vé chơi trò chơi trong khu vui chơi giải trí Fantasy Park dành cho 1 khách',
          ],
          options: [
            {
              label: "Người lớn",
              price: 1087000,
              note: "Trên 140 cm"
            },
            {
              label: "Trẻ em",
              price: 800000,
              note: "100 - 140 cm"
            }
          ]

        }
        ]
      },
      {
        id: 2,
        name: 'Hòn mun',
        price: 874000,
        origin: ['Nha Trang'],
        stars: 4.8,
        imageUrl: 'assets/TTC-Doc-Let-Beach-Tiny-Zoo-Nha-Trang.webp',
        tag: ['Du lịch biển đảo'],
      
        information:['Tham quan Hòn Mun – điểm đến lý tưởng với các hoạt dộng vui chơi như: Chèo thuyền kayak, chèo SUP, nhà phao trên biển, bơi ngắm san hô, lặn biển,...'],
        schedule: [
         {
          time: '08:00 - 15:30',
            activity: [
            'Xe cùng hướng dẫn viên đón khách tại khách sạn (trong nội thành Nha Trang), xe đưa khách đến bến cảng.',
            'Đến bến cảng, du khách di chuyển bằng ca nô/ thuyền, bắt đầu chuyến tham quan tour ba đảo Nha Trang.',
            'Trên đường đi du khách có thể ngắm nhìn cảnh biển vịnh Nha Trang xinh đẹp.',
            'Đến Hòn Mun. khách tự do khám phá vịnh.',
            'Trải nghiệm nhiều dịch vụ trò chơi trên biển như: lặn biển, đi bộ dưới đáy biển, dù bay, mô tô nước,...(chi phí tự túc)',
            'Khách di chuyển đến Làng Chài, khách sẽ được tham quan hệ thống lồng bè nuôi trồng thủy sản có quy ',
            'mô lớn nhất Vịnh Nha Trang. Sau đó thưởng thức bữa trưa. ',
            'Ca nô đưa du khách về lại cảng. Xe đưa du khách về lại khách sạn. Kết thúc tour. '
            ]
         }
        ],
        combos:[
         {
          id: 1,
          name: 'Tour ghép - Khởi hành thành phố Nha Trang ', 
          description: [
            'Hướng dẫn viên đi theo đoàn',
            '1x Bữa trưa,1x Chai nước suối',
            'Xe trung chuyển có điều hoà đưa đón',
            'Tàu cano/ thuyền di chuyển trong tour',
            'Vé vào cửa các điểm tham quan',
            'Dịch vụ tắm bùn Hòn Tằm'
          ],
          options: [
            {
              label: "Người lớn",
              price: 874000,
              note: "Trên 9 tuổi"
            },
            {
              label: "Trẻ em",
              price: 737000,
              note: "5-9 tuổi"
            }
          ]
         },
         {
          id: 2,
          name: 'Tour ghép - Khởi hành thành phố Nha Trang ', 
          description: [
            'Hướng dẫn viên đi theo đoàn',
            '1x Bữa trưa,1x Chai nước suối',
            'Xe trung chuyển có điều hoà đưa đón',
            'Tàu cano/ thuyền di chuyển trong tour',
            'Vé vào cửa các điểm tham quan',
            'Dịch vụ tắm bùn Hòn Tằm  Resort',
            'Bảo hiểm du lịch'
          ],
          options: [
            {
              label: "Người lớn",
              price: 920000,
              note: "Trên 9 tuổi "
            },
            {
              label: "Trẻ em",
              price: 810000,
              note: "5-9 tuổi"
            }
          ]
         }
        ]
      },
      {
        id: 5,
        name: 'Vịnh hạ long trên du thuyền',
        price: 6312000,
        origin: ['Quảng Ninh'],
        stars: 2,
        imageUrl: 'assets/images1.jpg',
        tag: ['Du lịch trải nghiệm',
              'Du lịch biển đảo'
        ],
        information: [
            `Khám phá vịnh Hạ Long trên du thuyền 6 sao cực kỳ sang trọng.
             Dành thời gian ở đảo Titov nơi bạn sẽ chứng kiến được toàn cảnh tuyệt đẹp của vịnh.
             Tham gia các hoạt động thú vị như câu mực, nấu món ăn Việt Nam, học võ Thái cực quyền, và các hoạt động khác.`
        ],
        schedule: [
        { time: '08:00 - 20:30', 
          activity: [
            '08:00-20:30 Đón tại Phố Cổ Hà Nội (chỉ áp dụng cho khách mua vé khởi hành từ Hà Nội)',
            'Đến Cảng Tuần Châu, checkin ',
            'Lên tàu và thưởng thức đồ uống chào đón',
            'Thưởng thức bữa trưa trên tàu trong khi du ngoạn trên vùng Vịnh Hạ Long',
            'Tham quan Hang Luồn/Trang trại Ngọc trai bằng thuyền tre hoặc thuyền kayak',
            'Ghé thăm Đảo Ti Top để bơi lội và trek ',
            'Trở lại tàu, tận hưởng Happy Hour (chi phí tự túc)',
            'Tham gia lớp học nấu ăn (tùy chọn)',
            'Thưởng thức bữa tối trên tàu',
            'Kết thúc tour'
          ] },
        ],
        combos: [
         {
          id: 6,
          name: 'Tour ghép trên tàu Sea Star - Khởi hành tại Hạ Long', 
          description: [
            'Phòng cabin cho 2 khách trên tàu',
            '1 bữa trưa và 1 bữa trưa nhẹ, 1 bữa tối 1 bữa sáng nhẹ, 1 nước ép trái cây, Nước uống, Trái cây',
            'Du thuyền để di chuyển',
            'Hướng dẫn viên tiếng Anh',
            'Vé vào cửa,Vé chèo kayak',
            'Lớp võ Thái cực quyền và lớp học nấu ăn',
          ],
          options: [
            {
              label: "Người lớn",
              price: 6312000,
              note: "trên 13 tuổi"
            },
            {
              label: "Trẻ em",
              price: 5130000,
              note: "4-13 tuổi"
            }
          ]
         },
         {
          id: 7,
          name: 'Tour ghép trên tàu Sea Star - Khởi hành tại Hà Nội', 
          description: [
            'Vé xe limousine đưa đón khứ hồi Hà Nội - Hạ Long',
            'Phòng cabin cho 2 khách trên tàu',
            '1 bữa trưa và 1 bữa trưa nhẹ, 1 bữa tối 1 bữa sáng nhẹ, 1 nước ép trái cây, Nước uống, Trái cây',
            'Du thuyền để di chuyển',
            'Hướng dẫn viên tiếng Anh',
            'Vé vào cửa,Vé chèo kayak',
            'Lớp võ Thái cực quyền và lớp học nấu ăn',
          ],
          options: [
            {
              label: "Người lớn",
              price: 7080000,
              note: "Trên 13 tuổi"
            },
            {
              label: "Trẻ em",
              price: 446500,
              note: "4-13 tuổi"
            }
          ]
         }
       ]
      
      },
      {
        id: 8,
        name: 'Vé tắm bùn khoáng nha trang',
        price: 433000,
        origin: ['Nha Trang'],
        stars: 4.2,
        imageUrl: 'assets/Hon-Tam-Nha-Trang.webp',
        tag: ['Du lịch nghỉ dưỡng'],
        information:['Nuông chiều bản thân với các dịch vụ tiện lợi tàu cao tốc khứ hồi, đồ uống chào mừng, bữa trưa tự chọn và tất cả các loại tiện ích để biến một ngày ở bãi biển trở nên hoàn hảo',
                    'Ngỡ ngàng trước cảnh quan tuyệt đẹp của Hòn Tằm'],
        schedule: [
        ],
        combos: [
        {
          id: 4,
          name: 'COMBO: Vé vào cửa Khu B & Vé tàu cao tốc khứ hồi & Ăn trưa',  
          
          description: [
            'Ăn trưa tại Resort Hòn Tằm (buffet hoặc set menu, tùy theo tình trạng sẵn có)',
            'Đưa đón khứ hồi bằng tàu cao tốc từ Thành phố Nha Trang (cảng khách sạn 6 sao Vinpearl) đến Khu nghỉ dưỡng Hòn Tằm cho 1 du khách',
            'Vé vào cửa Khu du lịch Hòn Tằm B cho 1 du khách',
            'Biểu diễn âm nhạc và khiêu vũ',
            'Vé vào bãi biển Hòn Tằm Khu B tại Khu nghỉ dưỡng Hòn Tằm',
            'Thuê khăn tắm và đồ bơi (cần đặt cọc) tại Hon Tam Resort',
          ],
          options: [
            {
              label: "Người lớn",
              price: 745000,
              note: "Trên 140 cm"
            },
            {
              label: "Trẻ em",
              price: 645000,
              note: "100 - 140 cm"
            }
          ]
        },
        {
          id: 9,
          name: 'COMBO: Vé vào cửa Khu B & Vé tàu cao tốc khứ hồi', 
          description: [
            'Đưa đón khứ hồi bằng tàu cao tốc từ Thành phố Nha Trang (cảng khách sạn 6 sao Vinpearl) đến Khu nghỉ dưỡng Hòn Tằm cho 1 du khách',
            'Vé vào cửa Khu du lịch Hòn Tằm B cho 1 du khách',
            'Biểu diễn âm nhạc và khiêu vũ',
            'Vé vào bãi biển Hòn Tằm Khu B tại Khu nghỉ dưỡng Hòn Tằm',
            'Thuê khăn tắm và đồ bơi (cần đặt cọc) tại Hon Tam Resort',
          ],
          options: [
            {
              label: "Người lớn",
              price: 433000,
              note: "Trên 140 cm"
            },
            {
              label: "Trẻ em",
              price: 400000,
              note: "100 - 140 cm"
            }
          ]
        }
        ]
          
      },
      {
        id: 5,
        name: 'Vé tham quan rừng dừa Bảy mẫu',
        price: 80000,
        origin: ['Hội An'],
        stars: 4.5,
        imageUrl: 'assets/Coconut-Jungle-Basket-Boat-Ride.webp',
        tag: ['Du lịch trải nghiệm'],
        information:['Tham gia một chuyến đi ngắn đến rừng dừa Bảy Mẫu trên chiếc thuyền thúng dân dã trước khi xem show diễn',
                    'Ngồi thuyền thúng len lỏi trong những rặng dừa xanh ngắt và tận hưởng không khí trong lành'],
        schedule: [
            
        ],
        combos: [
        {
          id: 10,
          name: 'Vé đi thuyền thúng', 
          description: [
            'Tour tham quan rừng dừa bằng thuyền thúng 1 giờ cho 1 du khách',
            'Nhân viên nói tiếng Anh và tiếng Việt',
            'Vé vào cửa',
            'Màn nhào lộn thuyền thúng'
          ],
          options: [
            {
              label: "Người lớn",
              price: 80000,
              note: "Trên 140 cm"
            },
            {
              label: "Trẻ em",
              price: 50000,
              note: "100 - 140 cm"
            }
          ]
        },
        {
          id: 5,
          name: 'Vé đi thuyền thúng', 
          description: [
            'Tour tham quan rừng dừa bằng thuyền thúng 1 giờ cho 1 du khách',
            '1 suất ăn trưa dành cho 1 du khách tại nhà hàng địa phương',
            'Nhân viên nói tiếng Anh và tiếng Việt',
            'Vé vào cửa',
            'Màn nhào lộn thuyền thúng',
          ],
          options: [
            {
              label: "Người lớn",
              price: 300000,
              note: "Trên 140 cm"
            },
            {
              label: "Trẻ em",
              price: 200000,
              note: "100 - 140 cm"
            }
          ]
        }
       ]
      },
      {
        id: 6,
        name: 'Tour chùa Linh Ứng, Ngũ Hành Sơn',
        price: 433000,
        origin: ['Hội An'],
        stars: 4.5,
        imageUrl: 'assets/Linh-Ung-Pagoda-Marble-Mountains-and-Hoi-An.webp',
        tag: ['Du lịch tâm linh'],
        information:['Khám phá làng điêu khắc Non Nước',
                    'Thưởng lãm nét đẹp của Ngũ Hành Sơn',
                    'Tận hưởng nét đẹp kiến trúc hoà trộn giữa văn hoá bản địa và văn hoá Nhật, Hoa, và phương Tây tại phố cổ Hội An'],
        schedule: [
          { time: '14:15 - 14:30', activity: ['Đón khách và di chuyển đến bán đảo sơn trà.'] },
          { time: '14h30 - 15:30', activity: ['Tham quan chùa Linh Ứng.'] },
          { time: '15:30 - 18:00', activity: ['Tiếp tục khởi hành đi đến khu danh thắng Ngũ Hành Sơn.'] },
          { time: '18:00 - 19:00', activity: ['Dùng bữa tối.'] },
          { time: '19:00 - 21:00', activity: ['Di chuyển đến Hội An. Khách tự do tham quan.'] },
          { time: '21:00 - 22:00', activity: ['Xe đưa khách về lại địa điểm đón ban đẩu.']}
        ],
        combos: [
        {
          id: 11,
          name: 'Tour ghép cho tối đa 30 khách (Công dân Việt Nam) - Khởi hành từ Đà Nẵng', 
          description: [
            '1 bữa tối, 1 chai nước suối, Khách có thể đặt bữa chay',
            'Xe có máy điều hoà để đưa đón và trung chuyển',
            'Vé vào cổng các điểm tham quan',
            'Bảo hiểm du lịch',
            'Hướng dẫn viên nói tiếng Việt',
          ],
          options: [
            {
              label: "Người lớn",
              price: 433000,
              note: "Trên 140 cm"
            },
            {
              label: "Trẻ em",
              price: 300000,
              note: "100 - 140 cm"
            }
          ]
        },
        
        ]
      }
]
export const sample_tags:Tag[] = [
    {name: 'Du lịch trải nghiệm'},
    {name: 'Công viên giải trí'},
    {name: 'Du lịch biển đảo'},
    {name: 'Du lịch nghỉ dưỡng'},
    {name: 'Du lịch tâm linh'},
    
  ]
export const sample_origins:Origin[] = [
    {name: 'Đà nẵng'},
    {name: 'Hội an'},
    {name: 'Nha trang'},
    {name: 'Quảng ninh'},
]