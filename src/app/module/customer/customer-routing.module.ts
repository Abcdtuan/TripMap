import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './component/customer-dashboard/customer-dashboard.component';
import { PageDetailComponent } from './component/page-detail/page-detail.component';
import { CompoOptionComponent } from './component/compo-option/compo-option.component';
import { MyBookingComponent } from './component/my-booking/my-booking.component';
import { ProfileComponent } from './component/profile/profile.component';
import { UpdateProfileComponent } from './component/update-profile/update-profile.component';
import { FavoriteComponent } from './component/favorite/favorite.component';





const routes: Routes = [
  {path:'dashboard',component:CustomerDashboardComponent},
  {path:'page-details/:id',component:PageDetailComponent},
  {path:'page-details/:id/combo-option',component:CompoOptionComponent},
  {path:'my-booking', component:MyBookingComponent},
  {path: 'profile',component:ProfileComponent},
  {path: 'update-profile', component: UpdateProfileComponent},
  {path: 'favorite', component: FavoriteComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
