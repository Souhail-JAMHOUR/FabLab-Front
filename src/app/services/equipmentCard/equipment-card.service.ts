import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EquipmentCardService {

  constructor(private http: HttpClient) { }

  getEquipmentData(): Observable<any> {
    return this.http.get<any>('./assets/Equipments.json');
  }
}
