import {Component,ContentChildren} from '@angular/core';
import  {modalService} from './modalservice';
@Component({
selector : 'modal',
templateUrl:'./modal.html',
styleUrls: ['./modal.css']
})

export class modal {
    constructor(private modalService:modalService){

    }
    ModalStatus : boolean=false;
    closeModal(){
        this.modalService.emitCloseButton(true);
       
    }

    ngOnInit(){
        this.modalService.modalEmiter.subscribe((data)=>{
this.ModalStatus = data;
console.log(this.ModalStatus);
        })
    }
}