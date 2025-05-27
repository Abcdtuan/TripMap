import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { PostTripComponent } from './component/post-trip/post-trip.component';
import { UpdateTripComponent } from './component/update-trip/update-trip.component';
import { GetBookingComponent } from './component/get-booking/get-booking.component';
import { GetAllUsersComponent } from './component/get-all-users/get-all-users.component';
import { UpdateComponent } from './component/update/update.component';

const routes: Routes = [
  {path:"dashboard", component:AdminDashboardComponent},
  {path:"trip",component:PostTripComponent},
  {path:"trip/:id",component:UpdateTripComponent},
  {path:"bookings",component:GetBookingComponent},
  {path:'get-all-users',component: GetAllUsersComponent},
  {path:'update',component:UpdateComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
