import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'restaurant-detail/:id',
    loadChildren: () => import('./restaurant-detail/restaurant-detail.module').then( m => m.RestaurantDetailPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'category/:category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'booking-page/:id',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'user-account',
    loadChildren: () => import('./user-account/user-account.module').then( m => m.UserAccountPageModule)
  },
  {
    path: 'booking-history',
    loadChildren: () => import('./booking-history/booking-history.module').then( m => m.BookingHistoryPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }