import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { Skill } from 'src/app/models/skill';
import { ProjectService } from 'src/app/services/project.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  skills: Skill[] = [];
  gitSkill: Skill = new Skill();
  github: boolean = false;
  skillsCategory: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private skillService: SkillService,
    private matSnackBar:MatSnackBar,
  ) {}

  project: Project = new Project();
  projectId: any;

  ngOnInit(): void {
    this.projectId = this.activatedRoute.snapshot.paramMap.get('projectId');
    this.projectService
      .getProjectById(this.projectId)
      .then((project: Project) => {
        this.project = project;
        this.skillService.getSkillsProject(project).then((skills: Skill[]) => {
          this.skills = skills;
          this.skills.forEach((skill: Skill) => {
            if (skill.displayName === 'github') {
              this.gitSkill = skill;
              this.github = true;
            }
          });
          this.getSkillsCategory();
        });
      });
  }

  onGitClick() {
    window.open(this.project.gitUrl, '_blank');
  }

  onChipClick(skill:Skill){
    
    this.matSnackBar.open(("Voulsez vous ouvir les projets " + skill.displayName + " ?"), "ouvrir" , {
      duration :2500
    });
    console.log(skill.displayName)
  }

  getSkillsCategory() {
    this.skills.forEach((skill) => {
      if (skill.category != undefined) {
        if (!this.skillsCategory.includes(skill.category))
          this.skillsCategory.push(skill.category);
      }
    });
  }

  getSkillByCategory(category: string): Skill[] {
    let categorySkills: Skill[] = [];
    this.skills.forEach((skill) => {
      if (skill.category === category) categorySkills.push(skill);
    });
    return categorySkills;
  }
}
