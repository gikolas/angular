import { Injectable, EventEmitter } from '@angular/core';
@Injectable()
export class modalService {
    modalEmiter = new EventEmitter;
    emitCloseButton(emitData: boolean) {
        this.modalEmiter.emit(emitData);
    }
}