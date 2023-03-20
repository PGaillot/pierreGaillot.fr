import { TreeNode } from './treeNode';

export const EXP_TREE_DATA: TreeNode[] = [
  {
    name: `2012 / Intervenant Graphisme`,
    children: [
      {
        name: `Création d'ateliers de découverte du graphisme pour les élèves de 3ème et 6ème - Collège Charles de Foucault, Albert.`,
      },
    ],
  },
  {
    name: `2013 - 2014 / Création de mon entreprise de communication`,
    children: [
      {
        name: `Réalisation de projets visuels (chartes graphiques, logos, livrets, flyers...) pour des professionnels (PME, associations, collectivités...) - 1001 Pages.`,
      },
    ],
  },
  {
    name: `2015 / Référent Art`,
    children: [
      {
        name: `Enseignement de cours d’art aux enfants de 6 à 12 ans - Lille Université Club (LUC), Lille.`,
      },
    ],
  },
  {
    name: `2016 - 2017 / Barista`,
    children: [
      {
        name: `Service, accueil et communication - Starbucks, Lille.`,
      },
    ],
  },
  {
    name: `2018 - 2019 / Moniteur d'atelier`,
    children: [
      {
        name: `Encadrement d'un atelier d'imprimerie composé 8 personnes - ESAT de l'association des Paralysés de France, Rivery.`,
      },
    ],
  },
  {
    name: `2021 - 2023 / Développeur front end`,
    children: [{ name: `Réalisation d'applications mobiles et web - Level Up cluster, Tourcoing.` }],
  },
];

export const STUDIES_TREE_DATA: TreeNode[] = [
  {
    name: `Développeur d'application - Android`,
    children: [
      {
        name: `Formation réalisée au cours de mon experience chez levelUp-cluster en 2022`,
        // TODO detailler la formation
      },
    ],
  },
  {
    name: `Formation BGE : Créer & enterprendre`,
    children: [
      {
        name: `Cette formation ma permis d'apprendre à créer et gérer ma petite entreprise de communication.`,
      },
    ],
  },
  {
    name: `1ère & 2ème année ESAC`,
    children: [{ name: `(ÉCOLE SUPÉRIEURE D’ARTS DE CAMBRAI)   (59)` }],
  },
  {
    name: `1ERE année ESBA`,
    children: [
      { name: `/ (ÉCOLE SUPÉRIEURE DES BEAUX ARTS) VALENCIENNES (59)` },
    ],
  },
  {
    name: `BAC PRO & CAP Communication Graphique et Visuelle`,
    children: [
      { name: ` Lycée Pro Sainte Marie BAILLEUL (59) avec la mention A.B.` },
    ],
  },
];
