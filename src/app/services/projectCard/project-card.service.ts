import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppStateService} from "../app-state.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectCardService {

  constructor(private http: HttpClient, public appState: AppStateService) {
  }

  getProjectData(): Observable<any> {
    return this.http.get<any>(`${this.appState.appHost}/projects/active`);
  }
}
