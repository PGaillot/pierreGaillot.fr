import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill-projects',
  templateUrl: './skill-projects.component.html',
  styleUrls: ['./skill-projects.component.scss'],
})
export class SkillProjectsComponent {
  skillId!: any;
  skill: Skill = new Skill();
  projects: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private skillServices:SkillService,
  ) {}

  ngOnInit(): void {
    this.skillId = this.activatedRoute.snapshot.paramMap.get('skillId');
    this.getSkill();
  }

  getSkill() {
    this.httpClient.get('assets/skills.json').subscribe((data) => {
      const skillsData = data;
      let skills: any = skillsData;
      skills.forEach((_skill: Skill) => {
        if (_skill.id == this.skillId) {
          this.skill = _skill;
        }
      });
      this.getProjects();
    });
  }

  getProjects() {
    this.httpClient.get('assets/projects.json').subscribe((data) => {
      const projectsData = data;
      let projects: any = projectsData;
      projects.forEach((_project: Project) => {
        if (_project.skillsId != null) {
          _project.skillsId.forEach((projectSkillId) => {
            if (this.skillId == projectSkillId) {
              this.projects.push(_project);
            }
          });
        }
      });
    });
  }
}
