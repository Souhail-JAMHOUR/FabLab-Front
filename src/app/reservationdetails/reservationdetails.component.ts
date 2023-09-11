import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationDetailsService } from '../services/reservationdetails/reservation-details.service';


@Component({
  selector: 'app-reservationdetails',
  templateUrl: './reservationdetails.component.html',
  styleUrls: ['./reservationdetails.component.css']
})
export class ReservationdetailsComponent implements OnInit {

  reservationId: string = '';
  reservationdetailsData: any;

  constructor(private reservationdetailsService: ReservationDetailsService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.reservationdetailsService.getReservationdetailsData().subscribe(data => {
      this.reservationdetailsData = data;
    });

    // this.route.params.subscribe((params) => {
    //   this.reservationId = params['id'];
    // });
  }

}
