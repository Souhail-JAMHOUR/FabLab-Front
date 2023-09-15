import { Component } from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {

  rapport: File | undefined;

  constructor() { }

  // Méthode pour gérer le téléchargement du rapport
  onFileChange(event: any) {
    this.rapport = event.target.files[0];
  }

  // Méthode pour gérer la soumission du formulaire
  onSubmit() {
    if (this.rapport) {
      // Envoyez le fichier (this.rapport) vers le serveur ici
      // Vous pouvez utiliser un service Angular pour effectuer l'envoi.
    }
  }

}
