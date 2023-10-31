import {Component, OnInit} from '@angular/core';
import {ProjectCardService} from "../services/projectCard/project-card.service";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css']
})
export class MyprojectsComponent implements OnInit{
  projectcardsData: any;

  constructor(private projectcardService: ProjectCardService, private router :Router) {
  }

  ngOnInit(): void {
    this.projectcardService.getProjectData().subscribe(data => {
      this.projectcardsData = data;
    });
  }

  newproject() {



    this.router.navigate(['member/project/myprojects/addnewproject']);
  }

}
