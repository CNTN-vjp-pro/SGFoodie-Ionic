export class Booking{
	adultQuantity: Number;
	childrenQuantity: Number;
	bookingDate: Date;
	name: String;
	email:String;
	note: String;
	restaurantName:String;
	constructor(){
		this.adultQuantity=new Number();
		this.childrenQuantity=new Number();
		this.bookingDate=new Date();
		this.name="";
		this.email="";
		this.note="";
		this.restaurantName="";
	}
}
