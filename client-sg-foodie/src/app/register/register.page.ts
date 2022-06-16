import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { customValidator, passwordValidator } from '../validators/check.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public regForm: FormGroup;
  users: any;
  _error: any;
  constructor(
    private _formBuilder: FormBuilder,
    private _service: UserService,
    private toastController: ToastController) { }

  ngOnInit() {
    this.regForm = this._formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(2), customValidator(/\@|\#|\$|\%|\^|\&/)]],
      email: ['', Validators.email],
      phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+84-?)|0)?[0-9]{10}$")]],
      dateBirth: Date.now(),
      password: [''],
      confirmPassword: ['']
    }, {validators: [passwordValidator]});

    this._service.getUsers().subscribe(users => {
      this.users = users;
    })
  }
  get fullName(){
    return this.regForm.controls['fullName']
  }
  
  get phoneNumber(){
    return this.regForm.controls['phoneNumber']
  }

  submitData(data: any) {
    console.log('hello world:', this.regForm.value);
       
    if(data){
      
        this._service.register(data).subscribe({
          next: res=>{
            let resData=JSON.parse(JSON.stringify(res));
            console.log(resData.message);
            if(resData.message=='success'){
              this.presentToast('Bạn đã đăng ký thành công');
            }
            
          },
          error: err => this._error = err
        });
      } 
      
      if(this._error){
        this.presentToast('Số điện thoại đã được sử dụng');
      }
    
  }

  onChange(e: any){
    if(e.target.checked){
      console.log("data")
    }
  }

  async presentToast(_message: string) {
    const toast = await this.toastController.create({
      message: _message,
      duration: 1500
    });
    toast.present();
  }
}

  
