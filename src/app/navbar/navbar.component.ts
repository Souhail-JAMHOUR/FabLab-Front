import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
  activeTab: string = 'Accueil'; // Onglet actif par défaut

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
