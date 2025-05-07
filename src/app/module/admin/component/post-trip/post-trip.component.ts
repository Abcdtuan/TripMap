import { Component, OnInit } from '@angular/core';
import { Trip } from '../../../../shared/models/Trip';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './post-trip.component.html',
  styleUrl: './post-trip.component.scss'
})
export class PostTripComponent  {
  isSpinning: boolean = false;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  postTripForm!: FormGroup;

  listOfTags: string[] = ['Du lịch biển đảo', 'Du lịch trải nghiệm', 'Du lịch nghỉ dưỡng', 'Du lịch tâm linh', 'Công viên giải trí'];
  listOfOrigins: string[] = ['Quảng Ninh', 'Nha Trang', 'Hội An', 'Đà Nẵng','Hà Nội', 'Hồ Chí Minh'];

  message: string = "";

  constructor(private fb: FormBuilder, private adminService:AdminService, private router:Router) {}

  ngOnInit(): void {
    this.postTripForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required,Validators.min(0)]],
      information: [''],
      tag: [[], Validators.required],
      origin: [[], Validators.required],
      schedule: this.fb.array([
        this.fb.group({
          from: ['', Validators.required],
          to: ['', Validators.required],
          activity: ['', Validators.required]
        })
      ]),
      combos: this.fb.array([
        this.fb.group({
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
        })
      ])
    });
  }
  postTrip(){
    console.log(this.postTripForm.value);
    this.isSpinning = true;
    const formData: FormData = new FormData();
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }
    formData.append('name', this.postTripForm.get('name')!.value);
    formData.append('price', this.postTripForm.get('price')!.value.toString());
    formData.append('information', this.postTripForm.get('information')!.value);
    formData.append('tag', JSON.stringify(this.postTripForm.get('tag')!.value));
    formData.append('origin', JSON.stringify(this.postTripForm.get('origin')!.value));
    formData.append('schedule', JSON.stringify(this.postTripForm.value.schedule));
    const combos = this.postTripForm.value.combos.map((combo: any) => ({
      ...combo,
      options: combo.options.filter((option: any) => (option.type ?? '').trim() !== '')
    }));
    formData.append('combos', JSON.stringify(combos));
    console.log(formData)
    this.adminService.postTrip(formData).subscribe({
      next: (res) => {
        this.isSpinning = false;
        this.message = 'Đăng bài thành công!';
        setTimeout(() => this.message = '', 5000);
        this.router.navigateByUrl('/admin/dashboard');
        console.log(res);
      },
      error: (err) => {
        this.message = 'Đăng bài thất bại!';
        setTimeout(() => this.message = '', 5000);
        console.error(err);
      }
    });
  
  }

  get schedule(): FormArray {
    return this.postTripForm.get('schedule') as FormArray;
  }

  addSchedule(): void {
    this.schedule.push(this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      activity: ['', Validators.required]
    }));
  }

  removeSchedule(index: number): void {
    this.schedule.removeAt(index);
  }

  get combos(): FormArray {
    return this.postTripForm.get('combos') as FormArray;
  }

  addCombo(): void {
    this.combos.push(this.fb.group({
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

  removeCombo(index: number): void {
    this.combos.removeAt(index);
  }
  getComboOptions(comboIndex: number): FormArray {
    return (this.combos.at(comboIndex) as FormGroup).get('options') as FormArray;
  }
  
  addComboOption(comboIndex: number): void {
    this.getComboOptions(comboIndex).push(this.fb.group({
      label: [''],
      price: [0],
      note: ['']
    }));
  }
  
  removeComboOption(comboIndex: number, optionIndex: number): void {
    this.getComboOptions(comboIndex).removeAt(optionIndex);
  }


  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  submitForm(): void {
    if (this.postTripForm.invalid) {
      this.schedule.controls.forEach((control, index) => {
        console.warn(`Schedule ${index} invalid:`, control.invalid, control.errors);
      });
      alert('Vui lòng điền đầy đủ thông tin hợp lệ!');
      return;
    }
  
    // Nếu hợp lệ thì gọi API
    this.postTrip();
  }
}
