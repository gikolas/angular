import * as firebase from 'firebase';
import { Servicelinks } from './serviceLinks';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { appData } from './firebaseApp';
import { map, take } from 'rxjs/operators';
import { _ParseAST } from '@angular/compiler';
import { resolve } from 'url';
@Injectable()
export class firebaseService {
    loadingSubject = new Subject();
    userNameSubject = new Subject();
    canAcitaveSubjet = new Subject();
    appData: appData[];
    Param: boolean = false;
    loadingImage = false;
    Username: string;
    constructor(private HttpClient: HttpClient) { }
    links = Servicelinks;

    getToken() {
        return firebase.auth().currentUser.getIdToken();
    }
    logIn(username: string, password: string): Promise<firebase.auth.UserCredential> {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(firebase.auth().signInWithEmailAndPassword(username, password))

            }, 1000)
        })
    }
    register(username: string, password: string): Promise<firebase.auth.UserCredential> {
        // return  firebase.auth().createUserWithEmailAndPassword(username, password).catch(res => console.log(res));
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(firebase.auth().createUserWithEmailAndPassword(username, password))

            }, 1000)
        })
    }
    getRate(): Observable<any> {
        return this.HttpClient.get(this.links[0]['rate']);
    }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    createApp(data: appData[]): Observable<any> {
        return this.HttpClient.post(this.links[1]['application'], data, this.httpOptions);
    }
    dataApp = [];

    getApps() {
        this.dataApp = [];
        return this.HttpClient.get(this.links[1]['application']).pipe(
            map((data: appData[]) => {
                for (let res of Object.values(data)) {
                    if (res[0]['identifier'] == window.localStorage.getItem('username')) {
                        this.dataApp.push(res);
                    }

                }
                return this.dataApp;
            })
        )
    }
    removeApp(index: number) {
        return this.HttpClient.delete(this.links[1]['application']);
    }
}