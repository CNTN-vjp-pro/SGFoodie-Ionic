export class User{
    public phoneNumber: string;
    public fullName: string;
    public dateBirth: Date;
    public password: string;
    public email: string;
    constructor(){
        this.phoneNumber = "",
        this.fullName = "",
        this.dateBirth = new Date(),
        this.password = "",
        this.email = ""
    }
}