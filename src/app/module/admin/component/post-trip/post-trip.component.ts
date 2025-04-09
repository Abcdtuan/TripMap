import { Component } from '@angular/core';
import { Trip } from '../../../../shared/models/Trip';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-post-trip',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './post-trip.component.html',
  styleUrl: './post-trip.component.scss'
})
export class PostTripComponent {
  isSpinning: boolean = false;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  listOfTags: string[] = ['Du lịch biển đảo', 'Du lịch trải nghiệm', 'Du lịch nghỉ dưỡng', 'Du lịch tâm linh'];
  listOfOrigins = ["Quảng Ninh","Nha TRang","Hội An","Đà Nẵng"];
  

  tripForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.tripForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      price: [0, Validators.required],
      stars: [0],
      imageUrl: [''],
      tag: this.fb.array([]),
      origins: this.fb.array([]),
      information: this.fb.array([]),
      schedule: this.fb.array([]),
      combos: this.fb.array([])
    });
  }

  // ========== TAGS ==========
  get tagArray(): FormArray {
    return this.tripForm.get('tag') as FormArray;
  }
 
  addTag(): void {
    this.tagArray.push(new FormControl(''));
  }
  removeTag(index: number) {
    this.tagArray.removeAt(index);
  }

  // ========== ORIGINS ==========
  get originsArray(): FormArray {
    return this.tripForm.get('origins') as FormArray;
  }
  toggleOrigin(origin: string) {
    const index = this.originsArray.value.indexOf(origin);
    if (index > -1) {
      this.originsArray.removeAt(index);
    } else {
      this.originsArray.push(new FormControl(origin));
    }
  }

  // ========== INFORMATION ==========
  get informationArray(): FormArray {
    return this.tripForm.get('information') as FormArray;
  }
  addInformation(info: string = '') {
    this.informationArray.push(new FormControl(info));
  }
  removeInformation(index: number) {
    this.informationArray.removeAt(index);
  }

  // ========== SCHEDULE ==========
  get scheduleArray(): FormArray {
    return this.tripForm.get('schedule') as FormArray;
  }
  addSchedule(time: string = '') {
    this.scheduleArray.push(this.fb.group({
      time: [time],
      activity: this.fb.array([])
    }));
  }
  removeSchedule(index: number) {
    this.scheduleArray.removeAt(index);
  }
  addActivity(scheduleIndex: number, activity: string = '') {
    const activityArray = this.scheduleArray.at(scheduleIndex).get('activity') as FormArray;
    activityArray.push(new FormControl(activity));
  }
  removeActivity(scheduleIndex: number, activityIndex: number) {
    const activityArray = this.scheduleArray.at(scheduleIndex).get('activity') as FormArray;
    activityArray.removeAt(activityIndex);
  }

  // ========== COMBOS ==========
  get combosArray(): FormArray {
    return this.tripForm.get('combos') as FormArray;
  }
  addCombo() {
    this.combosArray.push(this.fb.group({
      name: [''],
      price: [0],
      description: this.fb.array([])
    }));
  }
  removeCombo(index: number) {
    this.combosArray.removeAt(index);
  }
  addComboDescription(comboIndex: number, desc: string = '') {
    const descArray = this.combosArray.at(comboIndex).get('description') as FormArray;
    descArray.push(new FormControl(desc));
  }
  removeComboDescription(comboIndex: number, descIndex: number) {
    const descArray = this.combosArray.at(comboIndex).get('description') as FormArray;
    descArray.removeAt(descIndex);
  }

  // ========== IMAGE ==========
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.tripForm.get('imageUrl')?.setValue(reader.result as string); // dùng nếu muốn lưu preview vào imageUrl
      };
      reader.readAsDataURL(file);
    }
  }

  // ========== SUBMIT ==========
  onSubmit() {
    if (this.tripForm.valid) {
      const trip: Trip = this.tripForm.value;
      console.log('Trip submitted:', trip);
      // Gửi về server, xử lý tiếp...
    } else {
      console.log('Form chưa hợp lệ');
    }
  }
  get tagControls(): FormControl[] {
    return (this.tripForm.get('tag') as FormArray).controls as FormControl[];
  }
  
  get informationControls(): FormControl[] {
    return (this.tripForm.get('information') as FormArray).controls as FormControl[];
  }
  
  get scheduleControls(): FormGroup[] {
    return (this.tripForm.get('schedule') as FormArray).controls as FormGroup[];
  }
  
  get comboControls(): FormGroup[] {
    return (this.tripForm.get('combos') as FormArray).controls as FormGroup[];
  }
  
  getComboDescriptionControls(i: number): FormControl[] {
    return ((this.tripForm.get('combos') as FormArray)
      .at(i)
      .get('description') as FormArray).controls as FormControl[];
  }
  
  getActivityControls(i: number): FormControl[] {
    return ((this.tripForm.get('schedule') as FormArray)
      .at(i)
      .get('activity') as FormArray).controls as FormControl[];
  }
}
