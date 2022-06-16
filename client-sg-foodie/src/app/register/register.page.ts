import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { customValidator, passwordValidator } from '../validators/check.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public regForm: any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.regForm = this._formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(2), customValidator(/\@|\#|\$|\%|\^|\&/)]],
      email: ['', Validators.email],
      phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+84-?)|0)?[0-9]{10}$")]],
      password: [''],
      confirmPassword: ['']
    }, {validators: [passwordValidator]})
  }
  get fullName(){
    return this.regForm.controls['fullName']
  }
  
  get phoneNumber(){
    return this.regForm.controls['phoneNumber']
  }
}
