import { Component } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { HttpClient } from "@angular/common/http";

// import * as skillsData from 'src/app/data/skills.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: any;
  
  constructor(
    private httpClient: HttpClient
    ){}


  ngOnInit(){
    this.httpClient.get("assets/skills.json").subscribe(data =>{
      const skillsData = data;
      this.skills = skillsData;
    })
  }
}
