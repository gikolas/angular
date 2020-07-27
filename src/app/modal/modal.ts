import { Component, ContentChildren } from '@angular/core';
import { modalService } from './modalservice';
import { animate, style, transition, state, trigger } from '@angular/animations';
@Component({
    selector: 'modal',
    templateUrl: './modal.html',
    styleUrls: ['./modal.css'],
    animations: [
        trigger('modalShow', [
            state('showModal', style({
                opacity: 0,
                transform: 'scale(0.4)'
            })),
            state('hideModal', style({
                opacity: 1.5,
                transform: 'scale(1.2)'
            })),
            transition('showModal => hideModal', [
                animate('0.2s ease-in')
            ]),
            transition('hideModal => showModal', [
                animate('0.2s')
            ]),
        ])
    ]
})

export class modal {
    firstState = 'showModal';
    constructor(private modalService: modalService) {

    }
    ModalStatus: boolean = true;
    closeModal() {
        this.firstState = 'showModal';
        setTimeout(() => {

            this.modalService.emitCloseButton(true);

        }, 300);
    }

    ngOnInit() {

        this.modalService.modalEmiter.subscribe((data) => {

            this.ModalStatus = data;
            if (data == false) {
                this.firstState = 'hideModal';

            }
            else {
                this.firstState = 'showModal';

            }

        })
    }
}