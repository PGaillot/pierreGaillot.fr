import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      displayName: 'test',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      imgUrl:
        'https://this-person-does-not-exist.com/img/avatar-11ab00b25f22ad77edee40e6c9bdfdb3.jpg',
    },
    {
      displayName: '2',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      imgUrl:
        'https://this-person-does-not-exist.com/img/avatar-11ab00b25f22ad77edee40e6c9bdfdb3.jpg',
    },
    {
      displayName: '3',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      imgUrl:
        'https://this-person-does-not-exist.com/img/avatar-11ab00b25f22ad77edee40e6c9bdfdb3.jpg',
    },
    {
      displayName: '4',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      imgUrl:
        'https://this-person-does-not-exist.com/img/avatar-11ab00b25f22ad77edee40e6c9bdfdb3.jpg',
    },
  ];
}
