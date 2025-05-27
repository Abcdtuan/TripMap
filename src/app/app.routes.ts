import { Routes, } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

import { TransationComponent } from './transation/transation.component';
import { TicketSelectorComponent } from './ticket-selector/ticket-selector.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { UpdateProfileComponent } from './module/customer/component/update-profile/update-profile.component';

export const routes: Routes = [


    {path: 'trip/:id/ticket-selector', component: TicketSelectorComponent },


    
    {path:'transation', component: TransationComponent},
    {path:'update-profile',component:UpdateProfileComponent},
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
