import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private httpClient: HttpClient) {}

  public getProjects(): Promise<Project[]> {
    const projectsPromise: Promise<Project[]> = new Promise<Project[]>(
      (resolve, reject) => {
        this.httpClient.get('assets/projects.json').subscribe((data) => {
          const projectsData: any = data;
          const projects: Project[] = projectsData;
          resolve(projects);
        });
      }
    );
    return projectsPromise;
  }

  public getProjectsBySkill(skillsId: number[]): Promise<Project[]> {
    const projectsPromise: Promise<Project[]> = new Promise<Project[]>(
      (resolve, reject) => {
        let filtedProjects: Project[] = [];
        this.getProjects().then((projects: Project[]) => {
          skillsId.forEach((id:number) => {
            projects.forEach((project:Project) => {
              project.skillsId?.forEach(pSkillId => {
                if(pSkillId == id){
                  if (!filtedProjects.includes(project)) {
                    filtedProjects.push(project);
                  }
                }
              });

            });
          });
          resolve(filtedProjects);
        });
      }
    );
    return projectsPromise;
  }
  
  public getProjectById(projectId:number):Promise<Project>{
    const projectPromise:Promise<Project> = new Promise<Project>(
      (resolve, reject) => {
        this.getProjects().then((projects:Project[])=> {
          projects.forEach(project => {            
            if(project.id == projectId){
              resolve(project)
            }
          });
        })
      }
    )
    return projectPromise;
  }
}
