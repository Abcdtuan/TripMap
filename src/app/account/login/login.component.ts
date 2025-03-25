import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/trip/auth.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})


export class LoginComponent {
  isSpinning: boolean = false;
  loginForm: FormGroup;
 

  constructor(private fb : FormBuilder, private authService: AuthService){
    this.loginForm = this.fb.group(
      {
        email: ['',[Validators.required,Validators.email]],
        password:['',[Validators.required]]
      }
    )

  
  }
  login(){
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe((res) => {
      console.log(res);
      if(res.userId != null){
        const user = {
          id: res.userId,
          role:res.userRole
        };
        StorageService.saveUser(user);
        StorageService.saveToken(res.jwt);
    }
  })

  }
   
}
