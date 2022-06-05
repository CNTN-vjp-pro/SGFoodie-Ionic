export class Policy{
	_id:any;
	title:string;
	precontent:string;
	body:Body[];
	constructor(){
		this._id="";
		this.title="";
		this.body=[];
		this.precontent="";
	}
}
export class Body{
	subtitle:string;
	content:string;
	constructor(){
		this.subtitle="";
		this.content="";
	}
}