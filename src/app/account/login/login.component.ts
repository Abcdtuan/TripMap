import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { Route, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/trip/auth.service';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';


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
  message: String = "";
 private authService = inject(AuthService);

  constructor(private fb : FormBuilder, private router: Router){
    this.loginForm = this.fb.group(
      {
        email: ['',[Validators.required,Validators.email]],
        password:['',[Validators.required]]
      }
    )

  
  }
  login() {
    console.log(this.loginForm.value);
    this.isSpinning = true;
  
    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.isSpinning = false;
  
        if (res.userId != null) {
          const user = {
            id: res.userId,
            role: res.userRole
          };
          StorageService.saveUser(user);
          StorageService.saveToken(res.jwt);
  
          if (StorageService.isAdminLoggedIn()) {
            this.router.navigateByUrl("/admin/dashboard");
          } else if (StorageService.isCustomerLoggedIn()) {
            this.router.navigateByUrl("/customer/dashboard");
          }
        }
      },
      error: (err: any) => {
        this.isSpinning = false;
        console.error("Đăng nhập thất bại:", err);
        this.message = "Tên đăng nhập hoặc mật khẩu không đúng!";
        if (err.error?.message) {
          this.message += " (" + err.error.message + ")";
        }
        setTimeout(() => this.message = "", 3000);
      }
    });
  }
  

   
}
