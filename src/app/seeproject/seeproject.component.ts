import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-seeproject',
  templateUrl: './seeproject.component.html',
  styleUrls: ['./seeproject.component.css']
})
export class SeeprojectComponent {

   projectDetails :any;


  constructor(private router : Router,private activatedRoute:ActivatedRoute) {

    const navigation = this.router.getCurrentNavigation();

      this.projectDetails = navigation?.extras.queryParams?.['projectDetails']


     console.log(this.projectDetails.title);
  }

  hideProject() {
    this.router.navigate(['member/project/allprojects'])

  }
}
