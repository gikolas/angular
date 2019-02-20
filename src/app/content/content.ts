import {Component} from '@angular/core';
import {sharedTexts} from './sharedTexts/sharedTexts';
@Component({
    selector:'content',
    templateUrl:'./content.html',
    styleUrls:['./content.css']
})

export class contentClass {

    imgUrls : sharedTexts = {
        imgUrl:"https://s17664.pcdn.co/wp-content/themes/lcms-wordpress-theme-v1.2.5%2B2019-02-15T03-45-01-pm/images/landing/building_a_brighter_financial_future.png",
        loanImageUrl : "https://s17664.pcdn.co/wp-content/themes/lcms-wordpress-theme-v1.2.5%2B2019-02-14T05-55-19-pm/images/landing/personal_finance_that_fits_you.png"
    }

    ContentStyles = {
        'background-image' : `url(${this.imgUrls.imgUrl})`,
        'margin-left': "150px",
        'margin-top': "250px"
    }

    LoanStyle = {
        'background-image' : `url(${this.imgUrls.loanImageUrl})`,
    }
}