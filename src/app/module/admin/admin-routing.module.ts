import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { PostTripComponent } from './component/post-trip/post-trip.component';
import { UpdateTripComponent } from './component/update-trip/update-trip.component';
import { GetBookingComponent } from './component/get-booking/get-booking.component';

const routes: Routes = [
  {path:"dashboard", component:AdminDashboardComponent},
  {path:"trip",component:PostTripComponent},
  {path:"trip/:id",component:UpdateTripComponent},
  {path:"bookings",component:GetBookingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
