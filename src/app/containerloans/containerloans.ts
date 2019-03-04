import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import  {FormControl,FormGroup} from '@angular/forms';
import {containerList} from './containerList';

@Component({
selector :'containerloansApp',
templateUrl:'./containerloans.html',
styleUrls:['./containerloans.css']
})

export class containerloans {

    containerListArray : containerList[];
    ngOnInit(){
        this.containerListArray = [
            new containerList("Student Loan Refinancing","Get one simple payment that fits your budget. Variable rates start at 2.47% APR with Auto Pay.","2 Min Get My Rate",'Student'),
            new containerList("Parent PLUS Refinancing","Personalized payment plans for extra savings. Variable rates start at 2.47% APR with Auto Pay.","2 Min Get My Rate",'Parent'),
            new containerList("Personal Loans","Low-cost loans for qualified borrowers up to $75,000. Fixed rates from 6.99% APR.","2 Min Get My Rate",'Personal'),
       ];

    }

}