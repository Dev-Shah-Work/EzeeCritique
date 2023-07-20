import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserAuthGuard implements CanActivate {
  constructor( private router: Router,private user:UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):boolean|UrlTree{
   if(this.user.authenticateToken()){
    return true;
   }else{
    return this.router.parseUrl("/user-entry")
   }

  }

  // canActivate() {
  //   return true;
  // }
}
