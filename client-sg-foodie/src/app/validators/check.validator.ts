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
   const password = control.get('password');
   const confirmPassword = control.get('confirmPassword');
if ((password && password.pristine)  || (confirmPassword && confirmPassword.pristine)){
    return null;
}
   return password && confirmPassword && password.value !== confirmPassword.value ? {misMatch: true} : null
}


