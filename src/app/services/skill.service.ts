import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  constructor(private httpClient: HttpClient) {}

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
            this.sortSkillsAZ(skillsSelected)
            resolve(skillsSelected);
          })
          .catch((error) => reject(error));
      }
    );
    return skillSelectedPromise;
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
      return 0
    });
    return orderedSkills;
  }
}
