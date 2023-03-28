import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarLabel } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { Project } from 'src/app/models/project';
import { Skill } from 'src/app/models/skill';
import lgZoom from 'lightgallery/plugins/zoom';
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
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {}

  project: Project = new Project();
  projectId: any;

  settings = {
    counter: false,
    plugins: [lgZoom],
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
  };

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

  onChipClick(skill: Skill) {
    let sb = this.matSnackBar.open(
      'Voulez-vous ouvir les projets ' + skill.displayName + ' ?',
      'ouvrir',
      {
        duration: 2500,
      }
    );

    sb.afterDismissed().subscribe(null, null, () => {
      this.router.navigate(['/skillProjects/' + skill.id], {}); 
    });
  }


  getImgurThumbnails(imgUrl: string) {
    const imgFormat: string = imgUrl.slice(-4);
    const rawImgLink: string = imgUrl.slice(
      0,
      imgUrl.length - imgFormat.length
    );
    const newImgLink: string = rawImgLink + 's' + imgFormat;
    return newImgLink;
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

  getDelaultImageName(project: Project) {
    return 'screenshot ' + project.displayName;
  }
}
