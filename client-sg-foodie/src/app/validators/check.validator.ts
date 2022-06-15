import { AbstractControl, ControlContainer, ValidatorFn, Validators } from "@angular/forms";

// export function customValidator(control: AbstractControl): {[key:string]: any} | null {
//     const check = /\@|\#|\$|\%|\^|\&/g.test(control.value)
//     return check ? {nameNoMatch: {value: control.value}} : null
// }

export function customValidator(regex: RegExp): ValidatorFn{
    return (control: AbstractControl): {[key:string]: any}| 
    null =>{
        const matchName = regex.test(control.value);
        return matchName ? {'nameNoMatch': {value: control.value}} : null;
    }
}

// export class CustomValidators {
//     static phoneNumber(countryPhoneCode = '*'): ValidatorFn {
//       return Validators.pattern('([+]'+ countryPhoneCode + ')?([0-9]{9,12})$');
//     }
  
//   }

export function passwordValidator(control: AbstractControl): {[key:string]: any} | null {
   const pass = control.get('pass');
   const confirmPass = control.get('confirmPass');
if ((pass && pass.pristine)  || (confirmPass && confirmPass.pristine)){
    return null;
}
   return pass && confirmPass && pass.value !== confirmPass.value ? {misMatch: true} : null
}


