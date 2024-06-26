import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthguardService } from './authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard {

  constructor(
    private authSvc:AuthguardService,
    private router:Router//per i redirect
    ){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {

    if(!this.authSvc.syncIsLoggedIn){
      this.router.navigate(['/login'])
    }

    return this.authSvc.syncIsLoggedIn
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.canActivate(childRoute, state)
  }

}
