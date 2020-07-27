import { Component } from '@angular/core';
import { modalService } from '../../modal/modalservice';
@Component({
    selector: 'getstart',
    templateUrl: './getstart.html',
    styleUrls: ['./getstart.css']
})
export class getstart {
    constructor(private modalService: modalService) {

    }

    showModal() {
        this.modalService.emitCloseButton(false);
    }
}