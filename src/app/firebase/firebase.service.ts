//import * as firebase from 'firebase';
import {Servicelinks} from './serviceLinks';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {appData} from './firebaseApp';
import {map,tap} from 'rxjs/operators';
@Injectable()
export class firebaseService {

    appData:appData[];

    constructor(private HttpClient:HttpClient){}
    links = Servicelinks;
logIn(username:string,password:string){
      
    }
register(){

        }
getRate() : Observable<any>{
return this.HttpClient.get(this.links[0]['rate']);
}
createApp(data:appData[]){
return this.HttpClient.post(this.links[1]['application'],data);
}

getApps():Observable<any>{
    return this.HttpClient.get(this.links[1]['application']);
}
removeApp(){

        }
}