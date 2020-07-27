import { Component, OnInit } from '@angular/core';
import { firebaseService } from '../firebase/firebase.service';
import { map, filter } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.css']
})
export class MyappComponent implements OnInit {

  constructor(private firebaseService: firebaseService) { }
  myobg: Subscription;
  masM = [];
  ngOnInit() {

    /* this.myobg =  this.firebaseService.getApps().subscribe((data)=>{
       this.masM = [Object.values(data)];
       console.log(this.masM);
  
      })*/
    this.myobg = this.firebaseService.getApps().subscribe(
      data => {
        this.masM = data;
      },
      err => {
        console.log('error');
      }
    );

  }

  deleteApp(index: number) {
    /*this.firebaseService.removeApp(index).subscribe((data)=>{
      console.log(data);
    })*/
  }
}