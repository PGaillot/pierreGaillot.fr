import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: Skill[] = [];
  categories: string[] = [];
  categorySelected: string[] = [];
  skillsSelected: Skill[] = [];

  constructor(
    private httpClient: HttpClient,
    private skillService: SkillService
  ) {}

  ngOnInit() {
    this.getSkills();

    this.skillsSelected = this.skills;
    console.log(this.skills);
  }

  setChipSelected(chipValue: string) {
    if (this.categorySelected.includes(chipValue)) {
      const i: number = this.categorySelected.indexOf(chipValue);
      this.categorySelected.splice(i, 1);
    } else {
      this.categorySelected.push(chipValue);
    }
    this.refreshList(this.categorySelected);
  }

  refreshList(categories: string[]) {
    let refreshList: Skill[] = [];
    this.skills.forEach((_skill: Skill) => {
      if (this.categorySelected.length > 0) {
        this.categorySelected.forEach((category) => {
          if (_skill.category === category) {
            refreshList.push(_skill);
          }
        });
      } else {
        refreshList = this.skills;
      }
    });
    this.skillsSelected = refreshList;
  }

  getSkills() {
    this.skillService
      .getSkillsByCategories(this.categorySelected)
      .then((data) => {
        data.forEach((_skill: Skill) => {
          this.skills.push(_skill);
        });
        this.skills.forEach((_skill: Skill) => {
          if (_skill.category != undefined) {
            if (!this.categories.includes(_skill.category)) {
              this.categories.push(_skill.category);
            }
          }
        });
      })
      .catch((data) => console.log('error !'));
  }
}
