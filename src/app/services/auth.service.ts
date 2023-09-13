import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }


    async login(username : string, password : string){

        let user:any= await firstValueFrom(this.http.get("http://localhost:8089/users/"+username));
        //console.log(password);
        //console.log(user.password);
        //console.log(atob(user.password));
        if(password==atob(user.password)){
            let decodedJwt:any = jwtDecode(user.token);
            this.appState.setAuthState({
                isAuthenticated : true,
                username : decodedJwt.sub,
                roles : decodedJwt.roles,
                token : user.token
            });
            return Promise.resolve(true);
        } else {
            return Promise.reject("Bad credentials");
        }

}
