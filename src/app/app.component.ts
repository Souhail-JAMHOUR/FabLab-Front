import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  status: boolean = true; // Par défaut, la barre latérale est visible

  toggleSidebar() {
    this.status = !this.status; // Inverser le statut de la barre latérale
  }
}
