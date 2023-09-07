import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  actions: Array<any> = [
    {title: "Home", route: "/member/home", icon: 'assets/images/orange.png'},
    {title: "Reservation", route: "/member/reservation", icon: 'assets/images/orange.png'},
    {title: "Projects", route: "/member/project", icon: 'assets/images/orange.png'},
    {title: "Equipment", route: "/member/equipments", icon: 'assets/images/orange.png'}
  ];

  currentAction: any;

  ngOnInit() {
    this.currentAction = this.actions[0];
  }

  setCurrentAction(action: any) {
    this.currentAction = action;

  }
}
