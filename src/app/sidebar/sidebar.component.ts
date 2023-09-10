import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sideBarActions: Array<any> = [
    {title: "Dashboard", route: "/admin/dashboard", icon: 'assets/images/ic_Home.svg'},
    {title: "Projects", route: "/admin/project", icon: 'assets/images/ic_File_Copy.svg'},
    {title: "Equipment", route: "/admin/equipments", icon: 'assets/images/ic_Hammer.svg'},
    {title: "Reservation", route: "/admin/reservation", icon: 'assets/images/ic_Calendar_month.svg'},
    {title: "Users", route: "/admin/users", icon: 'assets/images/ic_Collective_class_training Copy.svg'},
    {title: "Failures", route: "/admin/failures", icon: 'assets/images/ic_Important.svg'},
  ];

  currentAction: any;

  ngOnInit() {
    this.currentAction = this.sideBarActions[0];
  }

  setCurrentAction(action: any) {
    this.currentAction = action;

  }
}
