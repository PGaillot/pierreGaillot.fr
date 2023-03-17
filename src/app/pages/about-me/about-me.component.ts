import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { DomSanitizer } from '@angular/platform-browser';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface ExperienceNode {
  name: string;
  children?: ExperienceNode[];
}

const EXP_TREE_DATA: ExperienceNode[] = [
  {
    name: `2012 / Intervenant Graphisme`,
    children: [
      {
        name: `durant 6 semaines en 2012, Création,et découverte du graphisme pour les élèves de 3ème et 6ème.`,
      },
    ],
  },
  {
    name: `2013 - 2014 / Création de mon entreprise`,
    children: [
      { name: `Réalisation de projets visuel pour des professionnels` },
    ],
  },
  {
    name: `2015 / Référent Art`,
    children: [
      {
        name: `durant 9 mois, en 2015 j’ai eu la chance d’etre le référant «Art» du LUC,  dans lequel je donnais des cours d’art aux enfants de 6 à 12 ans.`,
      },
    ],
  },
  {
    name: `2016 - 2017 / Barista Starbucks`,
    children: [
      {
        name: `j’ai participé en mai 2016 a l’ouverture du Starbucks de la rue Esquermoise dans lequel je participe également à la communication.`,
      },
    ],
  },
  {
    name: `2018 - 2019 / Moniteur d'atelier`,
    children: [
      {
        name: `en 2018, j'ai travaillé à l'ESAT de l'association des Paralysés de France comme moniteur d'atelier, je devais gérer une équipe de 8 personnes.`,
      },
    ],
  },
  {
    name: `2021 - 2023 / Développeur front end`,
    children: [{ name: `Level Up cluster.` }],
  },
];

const STUDIES_TREE_DATA: ExperienceNode[] = [
  {
    name: `Développeur d'application - Android`,
    children: [
      {
        name: `Formation réalisé au cours de mon experience chez levelUp-cluster en 2022`,
      },
    ],
  },
  {
    name: `FORAMATION BGE / CRÉER ET ENTREPRENDRE`,
    children: [{ name: ` (ÉCOLE SUPÉRIEURE D’ARTS DE CAMBRAI)   (59)` }],
  },
  {
    name: `1ERE & 2EME ANNÉE ESAC`,
    children: [{ name: `(ÉCOLE SUPÉRIEURE D’ARTS DE CAMBRAI)   (59)` }],
  },
  {
    name: `1ERE ANNÉE ESBA`,
    children: [
      { name: `/ (ÉCOLE SUPÉRIEURE DES BEAUX ARTS) VALENCIENNES (59)` },
    ],
  },
  {
    name: `BAC PRO & CAP COMMUNICATION GRAPHIQUE`,
    children: [
      { name: ` Lycée Pro Sainte Marie BAILLEUL (59) avec la mention A.B.` },
    ],
  },
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

    this.expDataSource.data = EXP_TREE_DATA;
    this.studiesDataSource.data = STUDIES_TREE_DATA;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    var myChart = new Chart('myChart', {
      type: 'doughnut',
      data: {
        labels: [
          'Peinture & Dessin',
          'Apprendre',
          'Jouer',
          'Bricoler',
          'Musique',
          'Coder',
        ],
        datasets: [
          {
            label: '%',
            data: [25, 35, 40, 20, 10, 40],
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)',
              'rgba(75, 192, 192)',
              'rgba(153, 102, 255)',
              'rgba(255, 159, 64)',
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            align:'start',
            position: 'top',
          },
        },
      },
    });
  }

  private _transformer = (node: ExperienceNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExperienceFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  expDataSource = new MatTreeFlatDataSource(
    this.treeControl,
    this.treeFlattener
  );
  studiesDataSource = new MatTreeFlatDataSource(
    this.treeControl,
    this.treeFlattener
  );

  hasChild = (_: number, node: ExperienceFlatNode) => node.expandable;
}
