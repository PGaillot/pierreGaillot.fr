import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { DomSanitizer } from '@angular/platform-browser';


interface ExperienceNode {
  name: string;
  children?: ExperienceNode[];
}

// const TREE_DATA: ExperienceNode[] = [
//   {
//     name: `Moniteur d'atelier / esat apf amiens(80)`,
//     children: [{name: `en 2018, j'ai travaillé à l'ESAT de l'association des Paralysés de France comme moniteur d'atelier, je devais gérer une équipe de 8 personnes.`}],
//   },
//   {
//     name: 'Vegetables',
//     children: [
//       {
//         name: 'Green',
//         children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
//       },
//       {
//         name: 'Orange',
//         children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
//       },
//     ],
//   },
// ];


const TREE_DATA: ExperienceNode[] = [
  {
    name: `2012 / Intervenant Graphisme`,
    children: [{name: `durant 6 semaines en 2012, Création,et découverte du graphisme pour les élèves de 3ème et 6ème.`}],
  },
  {
    name:`2013 - 2014 / Création de mon entreprise`,
    children: [{name: `Réalisation de projets visuel pour des professionnels`}],
  },
  {
    name:`2015 / Référent Art`,
    children: [{name: `durant 9 mois, en 2015 j’ai eu la chance d’etre le référant «Art» du LUC,  dans lequel je donnais des cours d’art aux enfants de 6 à 12 ans.`}],
  },
  {
    name: `2016 - 2017 / Barista Starbucks`,
    children: [{name: `j’ai participé en mai 2016 a l’ouverture du Starbucks de la rue Esquermoise dans lequel je participe également à la communication.`}],
  },
  {
    name: `2018 - 2019 / Moniteur d'atelier`,
    children: [{name: `en 2018, j'ai travaillé à l'ESAT de l'association des Paralysés de France comme moniteur d'atelier, je devais gérer une équipe de 8 personnes.`}],
  },
  {
    name:`2021 - 2023 / Développeur front end`,
    children: [{name: `Level Up cluster.`}],
  }
];

interface ExperienceFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})


export class AboutMeComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      `insta`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/instagram.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      `linkedin`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/linkedin.svg'
      )
    );

    this.dataSource.data = TREE_DATA;
  }


  private _transformer = (node: ExperienceNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExperienceFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
 
  hasChild = (_: number, node: ExperienceFlatNode) => node.expandable;
  
}
