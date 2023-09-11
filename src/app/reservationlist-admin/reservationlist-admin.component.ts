import { Component , OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation/reservation.service';


@Component({
  selector: 'app-reservationlist-admin',
  templateUrl: './reservationlist-admin.component.html',
  styleUrls: ['./reservationlist-admin.component.css']
})
export class ReservationlistAdminComponent implements OnInit {
  reservationData: any;

  constructor(private reservationService: ReservationService) {}

  filterStatus: string = 'all';

  setFilter(status: string) {
    this.filterStatus = status;
}


  ngOnInit(): void {
    this.reservationService.getReservationData().subscribe(data => {
      this.reservationData = data;
    });
  }

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }

}
