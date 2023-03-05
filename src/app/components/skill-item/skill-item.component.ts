import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent {
  @Input() skill!:Skill;
  skillColorAlpha:string = "";
  
  ngOnInit(): void {

    this.setSkillColorAlpha();
  }


  setSkillColorAlpha() {
    const opacity:string = "15";
    if(this.skill.color != null){
      this.skillColorAlpha = this.skill.color + opacity;
    } else {
      this.skillColorAlpha = "#cccccc" + opacity;
    }
  }

}
