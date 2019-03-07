import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {firebaseService} from './firebase/firebase.service';
@Injectable({
  providedIn: 'root'
})
export class MyAppGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private fb:firebaseService){}
  loadStatus = false;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(window.localStorage.getItem('activate')){
this.loadStatus = true;
    }
    else {
      this.loadStatus = false;  
    }
      return this.loadStatus;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
