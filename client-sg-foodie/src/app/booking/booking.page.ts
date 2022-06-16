import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Booking } from '../models/booking';
import { FoodieService } from '../services/foodie.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
	public bookingForm:any;
	minTime: String = new Date().toISOString();
	restaurant: any;  
	errMsg: string = "";
	_id: any;
	booking:Booking= new Booking();
  constructor(private _service: FoodieService, private activatedRoute: ActivatedRoute, private router: Router,private _formBuilder:FormBuilder, private toastController: ToastController) { }
  ngOnInit() {
	this.activatedRoute.paramMap.subscribe(params => {
		this._id = params.get('id');
	  });
	  this.getRestaurantById(this._id);  
	  this.bookingForm = this._formBuilder.group({
		adultQuantity:['',[Validators.required]],
		childrenQuantity:[,[Validators.required]],
		bookingDate:['',[Validators.required]],
		name:['',[Validators.required]],
		email:['',[Validators.email,Validators.required]],
		phoneNumber:['',[Validators.required,Validators.pattern("[0-9_-]{10,12}")]],
		note:[''],
		policyAcceptance:['',[Validators.required]],
		restaurantName: [''],
		restaurantAddress: ['']
	  })
  }
  getRestaurantById(_id: any){
	this._service.getResById(_id).subscribe((res) => {
	  this.restaurant = res;
	})
  }
  bookingSubmit(){
	this._service.postBookingTable(this.bookingForm.value).subscribe(res=>{
   let resData=JSON.parse(JSON.stringify(res));
})  
}
async presentToast() {
    const toast = await this.toastController.create({
      message: 'Quý khách đã đặt bàn thành công!',
      duration: 1500
    });
    toast.present();
  }
}

