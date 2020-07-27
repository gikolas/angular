import { Component } from '@angular/core';
import { brands, footerTexts } from './footerClass';
import { animation, state, trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
  animations: [
    trigger('pageOpacity', [
      state('opacityOn', style({
        opacity: '0.2'
      })),
      state('opacityOot', style({
        opacity: '1'
      })),
      transition("opacityOn=>opacityOot", [animate('0.5s')])
    ])
  ]

})


export class footer {
  brands = brands;
  footerTexts = footerTexts;

  pageNimation = 'opacityOn';
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.pageNimation = 'opacityOot';
    }, 2);

  }

}