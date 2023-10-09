import {Component} from '@angular/core';
import {AppStateService} from "../services/app-state.service";


@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  // cardsData: any;

  FirstName: String = this.state.authState.username;

  constructor(private state: AppStateService) {
  }


  // ngOnInit(): void {
  //   this.cardsService.getCardsData().subscribe(data => {
  //     this.cardsData = data;
  //   });
  // }

}
