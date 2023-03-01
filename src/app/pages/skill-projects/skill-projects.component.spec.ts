import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillProjectsComponent } from './skill-projects.component';

describe('SkillProjectsComponent', () => {
  let component: SkillProjectsComponent;
  let fixture: ComponentFixture<SkillProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
