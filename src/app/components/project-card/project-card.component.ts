import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {

  @Input() project!: Project;
  skills: Skill[] = [];
  projectSkills: Skill[] = [];
  github:boolean = false;
  gitSkill!:Skill;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('assets/skills.json').subscribe((data) => {
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
        this.skills.push(sk);
        if(sk.displayName === "github") this.gitSkill = sk;
      });
      this.getProjectSkills();
      this.checkIsGitProject();
    });
  }

  checkIsGitProject() {
    if(this.projectSkills.includes(this.gitSkill)) this.github = true;
  }

  getProjectSkills() {
    if (
      this.project.skillsId === undefined ||
      this.project.skillsId.length <= 0
    )
      return;

    this.project.skillsId.forEach((skillId) => {
      this.skills.forEach((skill: Skill) => {
        if (skillId === skill.id) {
          this.projectSkills.push(skill);
        }
      });
    });
  }

  onGitClick(){
    window.open(this.project.gitUrl, "_blank");
  }
}
