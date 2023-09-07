import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  activeIndex: number = 0; // Initialisation de l'index actif

  setActiveIndex(index: number): void {
    this.activeIndex = index; // Met à jour l'index actif lorsque cliqué
  }

  constructor() { }

  ngOnInit(): void {
  }
}
