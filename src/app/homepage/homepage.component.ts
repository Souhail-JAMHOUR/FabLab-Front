import { Component , OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  // cardsData: any;

  constructor(private sanitizer: DomSanitizer) {}

  FirstName : String = "Ahmed";
  SecondName : String = "Ben"


  // ngOnInit(): void {
  //   this.cardsService.getCardsData().subscribe(data => {
  //     this.cardsData = data;
  //   });
  // }

}
