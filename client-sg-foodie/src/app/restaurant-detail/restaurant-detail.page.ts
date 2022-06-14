import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodieService } from '../services/foodie.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.page.html',
  styleUrls: ['./restaurant-detail.page.scss'],
})
export class RestaurantDetailPage implements OnInit {
  restaurant: any;  
  restaurants: any;
  errMsg: string = "";
  _id: any;

  constructor(private _service: FoodieService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this._id = params.get('id');
      console.log(this._id);
    });
    this.getRestaurantById(this._id);

    this.getRestaurant();
  }

  getRestaurantById(_id: any){
    this._service.getResById(_id).subscribe((res) => {
      this.restaurant = res;
      console.log(this._id);
    })
  }
  getRestaurant(){
    this._service.getRestaurantsList().subscribe({
      next: data => this.restaurants = data,
      error: err => this.errMsg = err
    })
  }

}
