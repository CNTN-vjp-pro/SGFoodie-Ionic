import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantPagePageRoutingModule } from './restaurant-page-routing.module';

import { RestaurantPagePage } from './restaurant-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantPagePageRoutingModule
  ],
  declarations: [RestaurantPagePage]
})
export class RestaurantPagePageModule {}
