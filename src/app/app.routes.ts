import { Routes } from '@angular/router';
import { dashboardComponent } from './pages/dashboard/dashboard.component';
import { myAccountComponent } from './pages/my-account/my-account.component';
import { viewOrderComponent } from './pages/order-history/view-order/view-order.compontent';
import { trackOrderComponent } from './pages/order-history/track-order/track-order.component';
import { reviewOrderComponent } from './pages/order-history/review-order/review-order.component';

export const routes: Routes = [
  {
    path: '',
    component: dashboardComponent
  },
  {
    path: 'my-account',
    component: myAccountComponent
  },
{
  path: 'order-history/view-order',
  component: viewOrderComponent
},
{
  path: 'order-history/track-order',
  component: trackOrderComponent
},
{
  path: 'order-history/review-order',
  component: reviewOrderComponent
},
  
{
  path: 'auth',
  loadChildren : () => import('./pages/auth-module/auth.module').then(m => m.AuthModule)
}
];
