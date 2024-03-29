import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



// MatComponent
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { ProjectComponent } from './pages/project/project.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import {SkillProjectsComponent} from './pages/skill-projects/skill-projects.component'
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatTreeModule} from '@angular/material/tree'; 

// Light Gallery
import { LightgalleryModule } from 'lightgallery/angular';






@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectCardComponent,
    ProjectComponent,
    SkillProjectsComponent,
    SkillItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //LightGallery
    LightgalleryModule,
    // MatComponents
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatSnackBarModule,
    MatTreeModule,

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
