import { Injectable } from '@angular/core';
import { UserManager, User } from "oidc-client"
import { environment } from 'src/environments/environment';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenIdConnectService {
  private usermanager = new UserManager(environment.openIdConnectSettings)
  private _currentUser: User;
  get userAvailable(): boolean {
    return !!this._currentUser;
  }
  get currentUser(): User {
    return this._currentUser
  }
  userLoaded$ = new ReplaySubject<boolean>(1);
  constructor() {
    this.usermanager.clearStaleState();
    this.usermanager.getUser().then(user => {
      if (user) {
        this._currentUser = user;
        this.userLoaded$.next(true);
      } else {
        this._currentUser = null;
        this.userLoaded$.next(false);
      }
    }).catch(err => {
      this._currentUser = null;
      this.userLoaded$.next(false);
    })
    this.usermanager.events.addUserLoaded(user => {
      console.log(user)
      this._currentUser = user;
      this.userLoaded$.next(true);
    });
  }
  triggerSignIn() {
    this.usermanager.signinRedirect().then(() => {
      console.log('sign in ')
    })
  }
  handleCallback() {
    this.usermanager.signinRedirectCallback().then(user => {
      console.log('handleCallback')
      this._currentUser = user;
    })
  }
  handleSilentCallback() {
    this.usermanager.signinSilentCallback().then(user => {
      this._currentUser = user;
      console.log('handleSilentCallback')
    })
  }
  triggerSignOut() {
    this.usermanager.signoutRedirect().then(res => {
      console.log('triggerSignOut')
    })
  }
}
