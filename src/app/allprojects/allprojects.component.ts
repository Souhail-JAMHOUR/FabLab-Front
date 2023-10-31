import {Component, OnInit} from '@angular/core';
import {ProjectCardService} from "../services/projectCard/project-card.service";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-allprojects',
  templateUrl: './allprojects.component.html',
  styleUrls: ['./allprojects.component.css']
})
export class AllprojectsComponent implements OnInit{
  projectcardsData: any;

  constructor(private projectcardService: ProjectCardService, private router : Router) {
  }

  ngOnInit(): void {
    this.projectcardService.getProjectData().subscribe(data => {
      this.projectcardsData = data;
    });
  }


  projectDetailsVisible:boolean = false;
  seeProject(projectDetails :any) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "projectDetails": projectDetails ,

      }
    };

console.log(projectDetails)
    console.log('jdjdhdhe')

   this.router.navigate(['member/project/allprojects/projectdetailsx'],navigationExtras);
  }
}
