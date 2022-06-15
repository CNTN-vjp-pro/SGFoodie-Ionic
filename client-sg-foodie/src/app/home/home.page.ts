import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../models/restaurant';
import { FoodieService } from '../services/foodie.service';

import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectFade, Autoplay, Pagination, Navigation, SwiperOptions } from "swiper";

// install Swiper modules
SwiperCore.use([EffectFade, Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit{

  searchTerm: string;

  config: SwiperOptions ={
    spaceBetween: 30,
    effect: "fade",
    pagination:{
      clickable: true,
    },
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  }

  carousels = ["assets/images/Carousel/carousel_1.png", "assets/images/Carousel/carousel_2.png", "assets/images/Carousel/carousel_3.png", "assets/images/Carousel/carousel_4.png", "assets/images/Carousel/carousel_5.png"]

  i:number = 0;
  restaurants: any;
  categories: string[] = ["Nổi bật", "Ưu đãi", "Văn hóa ẩm thực", "Tinh hoa Việt Nam", "Điểm nhấn quận mình"];

  constructor(
    private _foodieService: FoodieService,
    private router: Router
  ) {}

  ngOnInit():void {
    this.initilizeData()
  }

  initilizeData(){
    return this._foodieService.getRestaurantsList().subscribe((data:any) => {
      this.restaurants = data;
      console.log(this.restaurants)
    })
  }

  findRestaurantList(cat: string): any {
    if(this.restaurants){
      return this.restaurants.filter(res => res.category.includes(cat));
    }
    
  }

}
