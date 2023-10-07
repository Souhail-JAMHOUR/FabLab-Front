import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppStateService} from "./app-state.service";
import jwtDecode from "jwt-decode";
import {UserRegisterRequest} from "../models/User.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  decodedJwt!: any;

  constructor(private http: HttpClient, private appState: AppStateService) {
  }


  loadProfile(data: any) {
    this.appState.authState.token = data['accessToken']
    this.decodedJwt = jwtDecode(this.appState.authState.token)
    this.appState.setAuthState({
      isAuthenticated: true,
      username: this.decodedJwt.sub,
      roles: this.decodedJwt.scope
    })
  }

  public login(username: string, password: string) {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    }
    let body = {
      "username": username,
      "password": password
    }
    // let params = new HttpParams().set("username", "username").set("password", "password");
    return this.http.post("http://localhost:8080/v1/auth/signin", body, options);
  }

  public signup(request: UserRegisterRequest) {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    }
    let body = {
      ...request
    }
    // let params = new HttpParams().set("username", "username").set("password", "password");
    return this.http.post("http://localhost:8080/v1/auth/signup", body, options);
  }

}
