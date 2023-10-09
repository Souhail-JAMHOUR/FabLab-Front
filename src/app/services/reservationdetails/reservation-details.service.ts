import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationDetailsService {

  constructor(private http: HttpClient) { }

  getReservationdetailsData(): Observable<any> {
    return this.http.get<any>('./assets/Reservation_equipments.json');
  }
}
