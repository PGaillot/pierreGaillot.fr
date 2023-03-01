import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";


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
