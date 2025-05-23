import { Routes, } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { TripPageComponent } from './pages/trip-page/trip-page.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ProfileComponent } from './profile/profile.component';
import { TransationComponent } from './transation/transation.component';
import { TicketSelectorComponent } from './ticket-selector/ticket-selector.component';
import { CompoOptionComponent } from './module/customer/component/compo-option/compo-option.component';
import { FooterComponent } from './footer/footer.component';
import { PromotionComponent } from './promotion/promotion.component';
import { Component } from '@angular/core';
import { FeatureCardComponent } from './feature-card/feature-card.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'search/:searchTerm',component:HomeComponent},
    {path:'trip/:id',component:TripPageComponent,},
    {path: 'trip/:id/ticket-selector', component: TicketSelectorComponent },
    {path:'tag/:tag',component:HomeComponent},
    {path:'origin/:origin',component:HomeComponent},
    {path:'favorite-page',component:FavoriteComponent},
    {path:'profile',component: ProfileComponent},
    {path:'transation', component: TransationComponent},
    {path:'admin',loadChildren:() => import("./module/admin/admin.module").then(m=>m.AdminModule)},
    {path:'customer',loadChildren:() => import("./module/customer/customer.module").then(m => m.CustomerModule)},
    {path:'ad',component:FeatureCardComponent},
    
    
    {path:'account',component:AccountComponent,
        children: [
            {path:'login',component:LoginComponent},
            {path:'register',component:RegisterComponent}
        ]
    }
];
