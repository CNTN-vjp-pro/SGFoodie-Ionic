import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorical-page',
  templateUrl: './categorical-page.component.html',
  styleUrls: ['./categorical-page.component.scss'],
})
export class CategoricalPageComponent implements OnInit {

  constructor() { }
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
  ngOnInit() {}
  getBannerSource(category:any){
	this.bannerSrc=this.banner[category];
}
}

