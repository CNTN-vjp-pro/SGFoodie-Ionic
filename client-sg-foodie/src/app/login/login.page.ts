import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { passwordValidator } from '../validators/check.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class LoginPage implements OnInit {

  public regForm: any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.regForm = this._formBuilder.group({
      phonenum: ['', [Validators.required, Validators.pattern("^((\\+84-?)|0)?[0-9]{10}$")]],
      pass: ['', [Validators.required]],
    }, {validators: [passwordValidator]})
  }

  get phonenum(){
    return this.regForm.controls['phonenum'];
  }
}
