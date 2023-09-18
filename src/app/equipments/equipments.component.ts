import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent {
  constructor(private router: Router) {}

  onCardClick() {
    // Effectuez la navigation vers le composant "Cart-Info" lorsque la carte est cliquée
    this.router.navigate(['/admin/cards-info']);
  }

}
