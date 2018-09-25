import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer-component/customer.component';
import { CustomerDetailComponent } from './customer-detail-component/customer-detail.component';
import { NewCustomerComponent } from './customer-new-component/customer-new-component';

const routes: Routes = [
    { path: '', component: CustomerComponent },
    { path: 'detail', component: CustomerDetailComponent },
    { path: 'new', component: NewCustomerComponent }
];

export const CustomerRoutes = RouterModule.forChild(routes);
