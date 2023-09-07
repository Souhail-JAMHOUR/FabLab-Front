import { Component , OnInit } from '@angular/core';
import { ProjectCardService } from '../services/projectCard/project-card.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit{
  projectcardsData: any;


  constructor(private projectcardService: ProjectCardService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.projectcardService.getProjectData().subscribe(data => {
      this.projectcardsData = data;
    });
  }


}
