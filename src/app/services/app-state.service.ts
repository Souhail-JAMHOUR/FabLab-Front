import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public appHost: string = "http://localhost:8080/v1";

  public authState: any = {
    isAuthenticated: false,
    username: undefined,
    roles: undefined,
    token: undefined
  }

  constructor() {
  }
  

  public setAuthState(state: any): void {
    this.authState = {...this.authState, ...state};
  }
}
