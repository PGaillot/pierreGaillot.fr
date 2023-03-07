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
  motivations:string[] = [];
  motivationSelected: string[] = [];
  projectsSelected: Project[] =[];

  constructor(
    private httpClient: HttpClient
    ){}
    
  ngOnInit(){
    this.httpClient.get("assets/projects.json").subscribe(data =>{
      const projectsData = data;
      this.projects = projectsData;
      this.getMotivation();
      this.projectsSelected = this.projects;
    })

  }

  getMotivation(){
    this.projects.forEach((project:Project) => {
      if(project.motivation != undefined){
        if(!this.motivations.includes(project.motivation)){
          this.motivations.push(project.motivation)
        }
      }
    });
  }

  setChipSelected(chipValue:string){
    if (this.motivationSelected.includes(chipValue)) {
      const i: number = this.motivationSelected.indexOf(chipValue);
      this.motivationSelected.splice(i, 1);
    } else {
      this.motivationSelected.push(chipValue);
    }
    this.refreshList(this.motivationSelected);
  }


  refreshList(motivationSelected: string[]) {
        let refreshList: Project[] = [];
    this.projects.forEach((_project: Project) => {
      if (this.motivationSelected.length > 0) {
        this.motivationSelected.forEach((motivation) => {
          if (_project.motivation === motivation) {
            refreshList.push(_project);
          }
        });
      } else {
        refreshList = this.projects;
      }
    });
    this.projectsSelected = refreshList;
  }

}
