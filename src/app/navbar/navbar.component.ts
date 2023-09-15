import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  actions: Array<any> = [
    {title: "Home", route: "/member/home", icon: 'assets/images/ic_Home.svg'},
    {title: "Reservation", route: "/member/reservation", icon: 'assets/images/ic_Calendar_month.svg'},
    {title: "Projects", route: "/member/member-projects", icon: 'assets/images/ic_File_Copy.svg'},
    {title: "Equipment", route: "/member/equipments", icon: 'assets/images/ic_Hammer.svg'}
  ];

  currentAction: any;

  ngOnInit() {
    this.currentAction = this.actions[0];
  }

  setCurrentAction(action: any) {
    this.currentAction = action;

  }
}
