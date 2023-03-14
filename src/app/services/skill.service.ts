import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Skill } from '../models/skill';
import { ProjectService } from './project.service';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  constructor(
    private httpClient: HttpClient,
    private projectServices: ProjectService
  ) {}

  public getSkills(): Promise<Skill[]> {
    const skillsPromise: Promise<Skill[]> = new Promise<Skill[]>(
      (resolve, reject) => {
        this.httpClient.get('assets/skills.json').subscribe((data) => {
          let skillsData: any = data;
          let skills: Skill[] = skillsData;
          resolve(skills);
        });
      }
    );
    return skillsPromise;
  }

  public getSkillsProject(project: Project): Promise<Skill[]> {
    let filtredSkills:Skill[] = [];
    const skillsProjectPromise: Promise<Skill[]> = new Promise<Skill[]>(
      (resolve, reject) => {

        this.getSkills().then((skills:Skill[])=>{
          skills.forEach((skill:Skill) => {

            project.skillsId?.forEach(skillId => {
              if(skillId == skill.id ){
                filtredSkills.push(skill)
              }
            });
          });
          resolve(filtredSkills)
        })
      }
    );
    return skillsProjectPromise;
  }

  public getSkillsByCategories(categories: string[]): Promise<Skill[]> {
    const skillSelectedPromise: Promise<Skill[]> = new Promise<Skill[]>(
      (resolve, reject) => {
        let skillsSelected: Skill[] = [];
        this.getSkills()
          .then((data) => {
            let skillsData: Skill[] = data;
            if (categories.length > 0) {
              skillsData.forEach((_skill) => {
                if (categories.includes(_skill.category)) {
                  if (!skillsSelected.includes(_skill))
                    skillsSelected.push(_skill);
                }
              });
            } else {
              skillsSelected = data;
            }
            this.sortSkillsAZ(skillsSelected);
            resolve(skillsSelected);
          })
          .catch((error) => reject(error));
      }
    );
    return skillSelectedPromise;
  }

  public getSkillById(skillId: number): Promise<Skill> {
    const skillPromise: Promise<Skill> = new Promise<Skill>(
      (resolve, reject) => {
        try {
          this.getSkills().then((skills: Skill[]) => {
            if (skills.find((skill: Skill) => skill.id === skillId)) {
              const i = skills.findIndex((skill) => skill.id === skillId);
              resolve(skills[i]);
            }
          });
        } catch (error) {
          reject(error);
        }
      }
    );
    return skillPromise;
  }

  public sortSkillsAZ(skills: Skill[]) {
    let orderedSkills: Skill[] = skills;
    orderedSkills.sort((a, b) => {
      if (a.displayName < b.displayName) {
        return -1;
      }
      if (a.displayName > b.displayName) {
        return 1;
      }
      return 0;
    });
    return orderedSkills;
  }
}
