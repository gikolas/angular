//import * as firebase from 'firebase';
import {Servicelinks} from './serviceLinks';
import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {appData} from './firebaseApp';
import { map } from 'rxjs/operators';
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
httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
   };

createApp(data:appData[]){
return this.HttpClient.post(this.links[1]['application'],data,this.httpOptions);
}
dataApp = [];



getApps(){
    return this.HttpClient.get(this.links[1]['application']).pipe(
        map((data:appData[])=>{
for(let res of Object.values(data)){
    if(res[0]['identifier'] == 'guest@test.com'){
        this.dataApp.push(res); 
    }

}
return this.dataApp;
        })
    )
}
removeApp(index:number){
return this.HttpClient.delete(this.links[1]['application']);
        }
}