import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { FoodieService } from '../services/foodie.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

	constructor(private _service: FoodieService,private activatedRoute: ActivatedRoute,private router: Router){
		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
	  }
	  categories: string[] = ["Nổi bật", "Ưu đãi", "Văn hóa ẩm thực", "Tinh hoa Việt Nam", "Điểm nhấn quận mình","Kiểu Nhật","Kiểu Trung","Kiểu Âu","Kiểu Hàn"];
	  category:any;
	  restaurants: any;
	  restaurant = new Restaurant();
	  banner :{ [key: string]: any } =  {
		"Nổi bật": "assets/images/Categorical/noiBat.png",
		"Ưu đãi": "assets/images/Categorical/uuDai.png",
		"Văn hóa ẩm thực": "assets/images/Categorical/vanHoaAmThuc.png",
		"Tinh hoa Việt Nam": "assets/images/Categorical/tinhHoa.png",
		"Điểm nhấn quận mình": "assets/images/Categorical/diemNhan.png",
		"Kiểu Nhật": "assets/images/Categorical/kieuNhat.png",
		"Kiểu Trung": "assets/images/Categorical/kieuTrung.png",
		"Kiểu Âu": "assets/images/Categorical/kieuAu.png",
		"Kiểu Hàn": "assets/images/Categorical/kieuHan.png",
	};
	bannerSrc:String="";
	  ngOnInit(): void {
		this.activatedRoute.paramMap.subscribe(params => {
		  this.category = params.get('category');
		  this.getBannerSource(this.category);
		  this.getRestaurantsCategory(this.category);
		});
	  }
	  getRestaurantsCategory(category:any){
		this._service.getRestaurantsListByCategory(category).subscribe((res:any) => {
			this.restaurants = res;
		 })
	  }
	  getBannerSource(category:any){
		  this.bannerSrc=this.banner[category];
	  }
}
	