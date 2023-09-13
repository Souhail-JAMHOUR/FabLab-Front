import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private router: Router) {}

  onCardClick() {
    // Effectuez la navigation vers le composant "Cart-Info" lorsque la carte est cliquée
    this.router.navigate(['/admin/cards-info']);
  }
}
