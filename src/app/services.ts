import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
@Injectable()

export class services {
Mysubject = new Subject();
changeHeaderImage(data:string,
    texts:string,
    className:string){
     this.Mysubject.next(
         {data:data,texts:texts,className:className}
     );
}
}