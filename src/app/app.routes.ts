import { Routes, } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { TripPageComponent } from './pages/trip-page/trip-page.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ProfileComponent } from './profile/profile.component';
import { TransationComponent } from './transation/transation.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'search/:searchTerm',component:HomeComponent},
    {path:'trip/:id',component:TripPageComponent},
    {path:'tag/:tag',component:HomeComponent},
    {path:'favorite-page',component:FavoriteComponent},
    {path:'profile',component: ProfileComponent},
    {path:'transation', component: TransationComponent},
    {path:'admin',loadChildren:() => import("./module/admin/admin.module").then(m=>m.AdminModule)},
    {path:'customer',loadChildren:() => import("./module/customer/customer.module").then(m => m.CustomerModule)},
    
    {path:'account',component:AccountComponent,
        children: [
            {path:'login',component:LoginComponent},
            {path:'register',component:RegisterComponent}
        ]
    }
];
