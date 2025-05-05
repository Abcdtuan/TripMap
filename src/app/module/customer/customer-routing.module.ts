import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './component/customer-dashboard/customer-dashboard.component';
import { HomeComponent } from '../../home/home.component';
import { PageDetailComponent } from './component/page-detail/page-detail.component';
import { CompoOptionComponent } from './component/compo-option/compo-option.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path:'dashboard',component:HomeComponent},
  {path:'customer-dashboard',component:CustomerDashboardComponent},
  {path:'page-details/:id',component:PageDetailComponent},
  {path:'page-details/:id/combo-option',component:CompoOptionComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
