import { Component, OnInit } from '@angular/core';
import { animation, state, trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
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
export class BlogComponent implements OnInit {

  pageNimation = 'opacityOn';
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.pageNimation = 'opacityOot';
    }, 2);

  }

}
