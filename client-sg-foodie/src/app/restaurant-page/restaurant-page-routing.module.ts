import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantPagePage } from './restaurant-page.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantPagePageRoutingModule {}
