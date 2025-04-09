import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { PostTripComponent } from './component/post-trip/post-trip.component';

const routes: Routes = [
  {path:"dashboard", component:AdminDashboardComponent},
  {path:"trip",component:PostTripComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
