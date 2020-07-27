import { Injectable } from '@angular/core';
import { logoName } from './logoname';


@Injectable()

export class headerService {

        getLogoName() {
                const logoname = new logoName('Micro', 1);
                return logoname;
        }
}