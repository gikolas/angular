//import * as firebase from 'firebase';
import {Servicelinks} from './serviceLinks';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,of} from 'rxjs';
@Injectable()
export class firebaseService {
    constructor(private HttpClient:HttpClient){}
    links = Servicelinks;
logIn(username:string,password:string){
      
    }
register(){

        }
getRate() : Observable<any>{
return this.HttpClient.get(this.links[0]['rate']);
}
createApp(){

}
removeApp(){

        }
}