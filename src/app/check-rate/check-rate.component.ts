import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { firebaseService } from '../firebase/firebase.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-check-rate',
  templateUrl: './check-rate.component.html',
  styleUrls: ['./check-rate.component.css']
})
export class CheckRateComponent implements OnInit {
  loanAmount: string;
  testStore: Observable<any>;
  turnOnPipe: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private firebaseService: firebaseService,
    private store: Store<any>
  ) {
    this.testStore = store.select('someAction');
  }
  RouterName: string;
  ngOnInit() {
    this.route.params.subscribe((route: any) => {
      this.RouterName = route;
    })


    this.firebaseService.getRate().subscribe((data) => {
      this.loanAmount = data.amount;
    })
  }
  Amount: number;
  Ccy: string;
  Year: number;
  Penalty: number;
  getRate = new FormGroup({
    amount: new FormControl(''),

    ccy: new FormControl(''),

    year: new FormControl(''),

    penalty: new FormControl('')
  })

  onSubmit() {
    this.Amount = this.getRate.controls.amount.value;
    this.Ccy = this.getRate.controls.ccy.value;
    this.Year = this.getRate.controls.year.value;
    this.Penalty = this.getRate.controls.penalty.value;
    this.turnOnPipe = true;

  }

}
