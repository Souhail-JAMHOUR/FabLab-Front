import { Component } from '@angular/core';

@Component({
  selector: 'app-failures',
  templateUrl: './failures.component.html',
  styleUrls: ['./failures.component.css']
})
export class FailuresComponent {
  showConfirm = false;

  // Fonction pour afficher le composant comfirm-failures
  showConfirmFailures() {
    this.showConfirm = true;
  }

}
