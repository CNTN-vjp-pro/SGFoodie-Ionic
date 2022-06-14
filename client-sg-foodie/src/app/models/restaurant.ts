export class Restaurant{
    public _id: any;
    public name: string;
    public short_description: string
    public description: []
    public image: []
    public menu: []
    public best_dishes: []
    public link: string
    public category: []
    public address: []
    public map: string
    public time: string
    public price_range: string
    public special_diet: []
    public discount: string
    public cmt: []
    constructor(){
        this._id = "";
        this.name = "";
        this.short_description = "";
        this.description = [];
        this.image = [];
        this.menu = [];
        this.best_dishes = [];
        this.link = "";
        this.category = [];
        this.address = [];
        this.map = "";
        this.time = "";
        this.price_range = "";
        this.special_diet = [];
        this.discount = ""
        this.cmt = [];
    }
}