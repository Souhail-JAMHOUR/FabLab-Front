import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar', // Vérifiez que le sélecteur est correct
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class CopyNavbarComponent {
  isDivTransformed: boolean = false;

  constructor() {}

  toggleDivTransform() {
    this.isDivTransformed = !this.isDivTransformed;
  }
}
