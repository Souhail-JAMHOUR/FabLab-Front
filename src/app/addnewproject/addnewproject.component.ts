import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-addnewproject',
  templateUrl: './addnewproject.component.html',
  styleUrls: ['./addnewproject.component.css']
})
export class AddnewprojectComponent {



  projectDetails :any;


  constructor(private router : Router,private activatedRoute:ActivatedRoute) {

  }

  hideProject() {
    this.router.navigate(['member/project/myprojects'])

  }

}
