import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { Skill } from 'src/app/models/skill';
import { ProjectService } from 'src/app/services/project.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill-projects',
  templateUrl: './skill-projects.component.html',
  styleUrls: ['./skill-projects.component.scss'],
})
export class SkillProjectsComponent {
  skillId!: any;
  skill: Skill = new Skill();
  projects: Project[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private skillService: SkillService
  ) {}

  ngOnInit(): void {
    this.skillId = this.activatedRoute.snapshot.paramMap.get('skillId');

    this.skillService.getSkillById(parseInt(this.skillId)).then((skill:Skill) => {
      this.skill = skill;
      this.getProjects();
    });
  }

  getProjects() {
    let skillsId:number[] = [this.skillId];
    this.projectService.getProjectsBySkill(skillsId).then((projects:Project[]) => {
    this.projects = projects;
    console.log(projects)
    })
  }
}
