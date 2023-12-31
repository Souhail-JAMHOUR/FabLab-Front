import {Component, OnInit} from '@angular/core';
import {ProjectCardService} from '../services/projectCard/project-card.service';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  projectcardsData: any;

  constructor(private projectcardService: ProjectCardService) {
  }

  ngOnInit(): void {
    this.projectcardService.getProjectData().subscribe(data => {
      this.projectcardsData = data;
    });
  }


}
