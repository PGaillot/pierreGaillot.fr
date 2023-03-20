import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { DomSanitizer } from '@angular/platform-browser';
import { Chart, registerables } from 'chart.js';
import * as EXP from 'src/assets/treeData'
import { TreeNode, ExperienceFlatNode } from 'src/assets/treeNode';

Chart.register(...registerables);

const EXP_TREE_DATA:TreeNode[] = EXP.EXP_TREE_DATA;
const STUDIES_TREE_DATA: TreeNode[] = EXP.STUDIES_TREE_DATA;


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

  openLink(link:any){
    window.open(link)
  }

  ngOnInit(): void {
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
            position: 'bottom',
          },
        },
      },
    });
  }

  private _transformer = (node: TreeNode, level: number) => {
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
