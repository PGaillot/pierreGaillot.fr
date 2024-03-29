import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillProjectsComponent } from './pages/skill-projects/skill-projects.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/about-me' },
  { path: 'about-me', component: AboutMeComponent, data: { animation: 'AboutMePage' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage' } },
  { path: 'skills', component: SkillsComponent, data: { animation: 'SkillsPage' } },
  {path:'project/:projectId', component: ProjectComponent, data:{animation:'ProjectPage'}},
  {path:'skillProjects/:skillId', component: SkillProjectsComponent, data:{animation:'ProjectPage'}},
  {path: '**',pathMatch: 'full', redirectTo: '/about-me'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
