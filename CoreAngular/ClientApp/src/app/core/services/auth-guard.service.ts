import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AdalService } from 'adal-angular4';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private adalService: AdalService) { console.log("adal service created"); }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.adalService.handleWindowCallback();
    if (this.adalService.userInfo.authenticated) {
      console.log("user is authenticated");
      return true;
    }
    console.log("user not authenticated");
    this.adalService.login();
    return false;
  }

  public canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }
}
