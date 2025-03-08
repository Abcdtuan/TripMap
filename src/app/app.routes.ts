import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { TripPageComponent } from './pages/trip-page/trip-page.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'search/:searchTerm',component:HomeComponent},
    {path:'trip/:id',component:TripPageComponent},
    {path:'account',component:AccountComponent,
        children: [
            {path:'login',component:LoginComponent},
            {path:'register',component:RegisterComponent}
        ]
    }
];
