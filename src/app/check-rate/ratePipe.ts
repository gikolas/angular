import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
   name: 'pipeRate'
})
export class pipeRates implements PipeTransform {

    constructor(){}

    transform(amount:number,baseAmount:number,ccy:string,year:number,penalty:number){
        if(ccy=='GEL'){
            if(penalty <=0 && baseAmount<=amount ){
                return baseAmount-100;
            }

            if(penalty > 0 && baseAmount<=amount ){
                return baseAmount-100-penalty;
            }
else {
    return 'Check Parameters'
}

        }
        if(ccy=='USD'){
            if(penalty <=0 && baseAmount<=amount ){
                return baseAmount-1000;
            }

            if(penalty > 0 && baseAmount<=amount ){
                return baseAmount-1000-penalty;
            }


        }
        else {
            return 'Check Parameters'
        }

    }
}