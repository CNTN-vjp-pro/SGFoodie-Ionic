import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../models/restaurant';
import { FoodieService } from '../services/foodie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

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
