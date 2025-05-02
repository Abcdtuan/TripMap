import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-trip',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './update-trip.component.html',
  styleUrl: './update-trip.component.scss'
})
export class UpdateTripComponent {
  tripId: number;
  trip: any;
  isSpinning: boolean = false;
  existingImages: string | null = null;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  
  updateForm!: FormGroup;
  listOfTags: string[] = [
    'Du lịch biển đảo',
    'Du lịch trải nghiệm',
    'Du lịch nghỉ dưỡng',
    'Du lịch tâm linh',
    'Công viên giải trí'
  ];
  listOfOrigins: string[] = [
    'Quảng Ninh',
    'Nha Trang',
    'Hội An',
    'Đà Nẵng'
  ];

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.tripId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.updateForm = this.fb.group({
      name: ['',],
      price: [0, [ Validators.min(0)]],
      information: [''],
      tag: [[], ],
      origin: [[],],
      schedule: this.fb.array([]),
      combos: this.fb.array([])
    });

    this.getTripById();
  }

  // Lấy dữ liệu chuyến đi và cập nhật form
  getTripById() {
    this.adminService.getTripById(this.tripId).subscribe({
      next: (res) => {
        if (Array.isArray(res)) {
          this.trip = res.find(t => t.id === this.tripId);
        } else {
          this.trip = res;
        }

        // Parse các trường JSON nếu cần
        const parsedTrip = {
          ...this.trip,
          tag: this.trip.tag ? JSON.parse(this.trip.tag) : '',
          origin: this.trip.origin ? JSON.parse(this.trip.origin) : '',
          schedule: this.trip.schedule ? JSON.parse(this.trip.schedule) : [],
          combos: this.trip.combos ? JSON.parse(this.trip.combos) : []
        };

        // Cập nhật ảnh
        this.existingImages = this.trip.returnedImage
          ? 'data:image/jpeg;base64,' + this.trip.returnedImage
          : null;

        // Patch các trường đơn giản
        this.updateForm.patchValue({
          name: parsedTrip.name,
          price: parsedTrip.price,
          information: parsedTrip.information,
          tag: parsedTrip.tag,
          origin: parsedTrip.origin
        });

        // Cập nhật schedule
        const scheduleArray = this.scheduleArray;
        scheduleArray.clear();
        if (Array.isArray(parsedTrip.schedule)) {
          parsedTrip.schedule.forEach((item: any) => {
            scheduleArray.push(this.fb.group({
              from: [item.from, Validators.required],
              to: [item.to, Validators.required],
              activity: [item.activity, Validators.required]
            }));
          });
        }

        // Cập nhật combos
      const combosArray = this.combosArray;
      combosArray.clear();
      if (Array.isArray(parsedTrip.combos)) {
      parsedTrip.combos.forEach((combo: any) => {
        // Khai báo kiểu cho FormArray là FormGroup<any>
        const optionsArray = new FormArray<FormGroup<any>>([]);
        if (Array.isArray(combo.options)) {
          combo.options.forEach((option: any) => {
            optionsArray.push(this.fb.group({
              type: [option.type],
              price: [option.price],
              note: [option.note]
            }));
          });
        }
          combosArray.push(this.fb.group({
            name: [combo.name],
            price: [combo.price],
            description: [combo.description],
            options: optionsArray
            }));
          });
      }
      },
      error: (error) => {
        console.error('Error loading trip:', error);
      }
    });
  }
  updateTrip() {
    console.log(this.updateForm.value);
    this.isSpinning = true;
    const formData: FormData = new FormData();
    if (this.selectedFile ) {
      formData.append('image', this.selectedFile);
    }
    formData.append('name', this.updateForm.get('name')!.value);
    formData.append('price', this.updateForm.get('price')!.value.toString() ?? '0');
    formData.append('information', this.updateForm.get('information')!.value);
    formData.append('tag', JSON.stringify(this.updateForm.get('tag')!.value));
    formData.append('origin', JSON.stringify(this.updateForm.get('origin')!.value));
    formData.append('schedule', JSON.stringify(this.updateForm.value.schedule));
    const combos = this.updateForm.value.combos
      .filter((combo: any) => combo.name || combo.price || combo.description)
      .map((combo: any) => ({
        ...combo,
        options: (combo.options || []).filter((option: any) => 
          (option.type ?? '').trim() !== '' || option.price > 0 || (option.note ?? '').trim() !== ''
        )
      }));

    formData.append('combos', JSON.stringify(combos));
    this.adminService.updateTrip(this.tripId,formData).subscribe({
      next: (res) => {
        this.isSpinning = false;
        alert('Cập nhật thành công!');
        this.router.navigateByUrl('/admin/dashboard');
        console.log(res);
      },
      error: (err) => {
        alert('Cập nhật thất bại!');
        console.error(err);
      }
    });

  }

  // Getter cho FormArray schedule
  get scheduleArray(): FormArray {
    return this.updateForm.get('schedule') as FormArray;
  }

  // Getter cho FormArray combos
  get combosArray(): FormArray {
    return this.updateForm.get('combos') as FormArray;
  }

  // Thêm lịch trình
  addSchedule(): void {
    this.scheduleArray.push(this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      activity: ['', Validators.required]
    }));
  }

  // Xóa lịch trình
  removeSchedule(index: number): void {
    this.scheduleArray.removeAt(index);
  }

  // Thêm combo
  addCombo(): void {
    this.combosArray.push(this.fb.group({
      name: [''],
      price: [0],
      description: [''],
      options: this.fb.array([
        this.fb.group({
          type: [''],
          price: [0],
          note: ['']
        })
      ])
    }));
  }

  // Xóa combo
  removeCombo(index: number): void {
    this.combosArray.removeAt(index);
  }

  // Lấy FormArray options của một combo
  getComboOptions(comboIndex: number): FormArray {
    return (this.combosArray.at(comboIndex) as FormGroup).get('options') as FormArray;
  }

  // Thêm option cho combo
  addComboOption(comboIndex: number): void {
    this.getComboOptions(comboIndex).push(this.fb.group({
      type: [''],
      price: [0],
      note: ['']
    }));
  }

  // Xóa option của combo
  removeComboOption(comboIndex: number, optionIndex: number): void {
    this.getComboOptions(comboIndex).removeAt(optionIndex);
  }

  // Xử lý chọn file ảnh
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.existingImages = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  submitForm(): void {
    console.log('submitForm được gọi!');
    if (this.updateForm.invalid) {
      Object.values(this.updateForm.controls).forEach((control: any, index) => {
        if (control.invalid) {
          console.warn(`Control ${index} invalid:`, control.errors);
        }
      });
      alert('Vui lòng điền đầy đủ thông tin hợp lệ!');
      return;
    }
  
    // Nếu hợp lệ thì gọi API cập nhật
    this.updateTrip();
  }

  // Xử lý submit form
  
}