import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CategoricalPageComponent } from './categorical-page/categorical-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{path:'navigation-bar',component:NavigationBarComponent},	
  {path:'category/:category',component:CategoricalPageComponent},
  {path: 'restaurant-page', component:RestaurantPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
