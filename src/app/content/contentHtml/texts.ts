import {Component,Input} from '@angular/core';
import {sharedTexts} from '../sharedTexts/sharedTexts';

@Component({
selector :'textsApp',
templateUrl:'./texts.html',
styleUrls:['./texts.css']
})

export class texts {
Parameters : sharedTexts[];
header : sharedTexts = {
    h3:'Building a brighter financial future'
}

ngOnInit(){

    this.Parameters=[

new sharedTexts('We use data other lenders don’t—like your savings patterns, investments, and career trajectory—to give you the rate you deserve.',
'Lower rates through better data'),


new sharedTexts('Precision Pricing™ saves money for student loan refinancing clients by using your budget to determine a unique rate and term—down to the month.',
'Customization to your budget & timeline'),

new sharedTexts('Apply online, then manage your account payment preferences with our intuitive dashboard.',
'Seamless from start to finish'),

new sharedTexts(' Our in-house Client Happiness team is available via call, text, or email for student loan clients.',
'Expert in-house service'),

];
}
}