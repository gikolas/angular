import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pipeRate'
})
export class pipeRates implements PipeTransform {

    constructor() { }

    transform(amount: number, baseAmount: number, ccy: string, year: number, penalty: number) {
        if (ccy == 'GEL') {
            if (penalty <= 0 && baseAmount <= amount) {
                return `Your Rate Is  ${baseAmount - 100} ${ccy} `;
            }
            if (penalty > 0 && baseAmount <= amount) {
                return `Your Rate Is  ${baseAmount - 100 - penalty} ${ccy} `;
            }
            else {
                return 'Check Parameters'
            }
        }
        if (ccy == 'USD') {
            if (penalty <= 0 && baseAmount <= amount) {
                return `Your Rate Is  ${baseAmount - 1000} ${ccy} `;
            }
            if (penalty > 0 && baseAmount <= amount) {
                return `Your Rate Is  ${baseAmount - 1000 - penalty} ${ccy} `;
            }
        }
        else {
            return 'Check Parameters'
        }
    }
}