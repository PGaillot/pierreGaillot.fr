import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: any = [];

  constructor(
    private httpClient: HttpClient
    ){}
    
  ngOnInit(){
    this.httpClient.get("assets/projects.json").subscribe(data =>{
      const projectsData = data;
      this.projects = projectsData;
    })
  }
}
