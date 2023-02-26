import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  skills: Skill[] = [];
  gitSkill: Skill = new Skill();
  github:boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  project: Project = new Project();
  projectId: any;

  ngOnInit(): void {
    this.projectId = this.activatedRoute.snapshot.paramMap.get('projectId');
    this.getProject();
  }

  getProject() {
    this.httpClient.get('assets/projects.json').subscribe((data) => {
      const projectsData = data;
      let projects: any = projectsData;
      projects.forEach((_project: any) => {
        if (_project.id == this.projectId) {
          this.project.id = _project.id;
          this.project.displayName = _project.displayName;
          this.project.description = _project.description;
          this.project.imgUrl = _project.imgUrl;
          this.project.skillsId = _project.skillsId;
          this.project.gitUrl = _project.gitUrl;
        }
      });
    });
    this.getSkills()
  }

  getSkills() {
    this.httpClient.get('assets/skills.json').subscribe((data) => {
      const allSkills:Skill[] = [];
      const skillsData = data;
      let skills: any = skillsData;
      skills.forEach((_skill: any) => {
        let sk = new Skill();
        sk.id = _skill.id;
        sk.displayName = _skill.displayName;
        sk.categoty = _skill.categoty;
        sk.color = _skill.color;
        sk.description = _skill.description;
        sk.iconUrl = _skill.iconUrl;
        sk.level = _skill.level;
        allSkills.push(sk);
        if (sk.displayName === 'github') this.gitSkill = sk;
      });
      this.project.skillsId!.forEach(skillId => {
        allSkills.forEach(skill => {
          if(skillId == skill.id){
            if(skillId == this.gitSkill.id) this.github = true;
            this.skills.push(skill)
          }
        });
      });
    });
  }

  onGitClick(){
    window.open(this.project.gitUrl, "_blank");
  }
}
