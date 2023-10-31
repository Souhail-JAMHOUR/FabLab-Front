import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {ProjectsNavbarComponent} from "../projects-navbar/projects-navbar.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  constructor(private router :Router) {
  }






  actions: Array<any> = [
    {title: "Home", route: "/member/home" , icon: 'assets/images/ic_Home.svg'},
    {title: "Reservation", route: "/member/reservation", icon: 'assets/images/ic_Calendar_month.svg'},
    {title: "Projects", route: "/member/project", icon: 'assets/images/ic_File_Copy.svg'},
    {title: "Equipment", route: "/member/equipments", icon: 'assets/images/ic_Hammer.svg'}
  ];

  currentAction: any;

  ngOnInit() {

    this.router.navigate(['/member/home']);
    this.currentAction = this.actions[0];

  }

  setCurrentAction(action: any) {

    this.currentAction = action;

    if(this.currentAction.title=='Projects'){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "brek": "projet",

        }
      };

      this.router.navigate(['/member/project/allprojects'],navigationExtras);
      //this.prjNavBar.currentAction=this.prjNavBar.actions[0];

    }

  }
}
