import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-projects-navbar',
  templateUrl: './projects-navbar.component.html',
  styleUrls: ['./projects-navbar.component.css']
})
export class ProjectsNavbarComponent  implements OnInit {


  constructor(private router:Router, private rr :ActivatedRoute) {
    this.rr.queryParams.subscribe(params => {
      //waaayli Ela brek
      this.currentAction = this.actions[0];


    });
  }


  actions: Array<any> = [
    {title: "All Projects", route: "/member/project/allprojects"},
    {title: "My Projects", route: "/member/project/myprojects"},
    {title: "Submissions", route: "/member/project/submissions"},

  ];

  currentAction: any;

  ngOnInit() {
    this.currentAction = this.actions[0];
    this.router.navigate(['/member/project/allprojects'])

  }

  setCurrentAction(action: any) {
    this.currentAction = action;


  }
}
