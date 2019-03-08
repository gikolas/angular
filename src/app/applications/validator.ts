import {AbstractControl} from '@angular/forms';
export class checkEmail {

    static validatorEmail(control:AbstractControl){
if(control.get('email').value!=window.localStorage.getItem('username')){
control.get('email').setErrors({
    invalidEmail : true
})
}
else return null;
    }
}