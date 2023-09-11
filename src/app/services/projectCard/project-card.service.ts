import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectCardService {

  constructor(private http: HttpClient) { }

  getProjectData(): Observable<any> {
    return this.http.get<any>('./assets/Projects.json');
  }
}
