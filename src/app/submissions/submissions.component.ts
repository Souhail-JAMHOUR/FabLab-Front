import {Component, OnInit} from '@angular/core';
import {ProjectCardService} from "../services/projectCard/project-card.service";

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit{
  projectcardsData: any;

  constructor(private projectcardService: ProjectCardService) {
  }

  ngOnInit(): void {
    this.projectcardService.getProjectData().subscribe(data => {
      this.projectcardsData = data;
    });
  }

}
