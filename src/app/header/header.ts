import { Component, OnInit } from '@angular/core';
import { headerService } from './headerservice';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { services } from '../services';
@Component({
  selector: 'headerApp',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  animations: [
    trigger('menuFade', [
      state('fadeIn', style({
        opacity: 1,
        width: "1500px",
        margin: "0 auto"
      })
      ),
      state('fadeOut', style({
        opacity: 1,
        position: "fixed",

        background: "rgb(116, 155, 167)",
        width: "1500px",
        margin: "0 auto"

      })
      ),
      transition('fadeIn <=> fadeOut', [
        animate('0.5s')
      ]),

    ]),

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
export class header implements OnInit {

  pHeader: string;
  pDescription: string;
  logoname: object;
  constructor(private headerService: headerService, private myservice: services) { }
  rowClass = false;
  mainState = 'fadeIn';
  clk() {

    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 10) {
      this.mainState = "fadeOut";

    } else if (number < 10) {
      this.mainState = "fadeIn";
    }
  }

  pageNimation = 'opacityOn';
  className = 'jumbotron';
  headerImageName: any;
  ngOnInit() {
    this.headerImageName = 'url(assets/mphp-photo-hero-above-cta-min.jpg)';
    this.myservice.Mysubject.subscribe((data: any) => {
      this.headerImageName = data.data;
      this.className = data.texts;
    })

    setTimeout(() => {
      this.pageNimation = 'opacityOot';
    }, 2);


    this.pHeader = 'Welcome to a better way to borrow.';
    this.pDescription = " We’re using unrivaled service and technology to bring low-interest loans to high-potential people. Like you.";
    this.logoname = this.headerService.getLogoName();
  }
}