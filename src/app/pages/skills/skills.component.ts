import { Component } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      displayName: 'figma',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
      categoty:"design",
      description:"Figma est une application de conception d'interface utilisateur basée sur le cloud. Elle permet aux utilisateurs de créer des maquettes, des prototypes et des designs de haute qualité pour des applications mobiles et des sites web. Figma est populaire pour sa collaboration en temps réel, qui permet à plusieurs utilisateurs de travailler sur un même projet simultanément, ainsi que pour sa facilité d'utilisation et sa flexibilité. Les utilisateurs peuvent également intégrer des plugins tiers pour améliorer les fonctionnalités de l'application."
    },
    {
      displayName: 'notion',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/langfr-800px-Notion-logo.svg.png',
      categoty:"productivité",
      description:"Notion est une plateforme de productivité tout-en-un. Elle permet aux utilisateurs de créer des notes, des bases de données, des tableaux de bord, des wikis, des listes de tâches et bien plus encore, le tout dans une interface utilisateur conviviale. Notion est populaire pour sa flexibilité et sa personnalisation, permettant aux utilisateurs de créer des espaces de travail qui répondent à leurs besoins spécifiques. Elle est disponible sur le web et sur les appareils mobiles." 
    },
    {
      displayName: 'Java',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/270px-Java_Logo.svg.png',
      categoty:"dev",
      description:"Java est un langage de programmation orienté objet populaire créé par James Gosling et ses collègues chez Sun Microsystems dans les années 1990. Il est souvent utilisé pour le développement d'applications pour les ordinateurs de bureau, les serveurs, les appareils mobiles et les systèmes embarqués. Java est apprécié pour sa portabilité, sa sécurité et sa facilité d'utilisation, ainsi que pour sa grande communauté de développeurs et la richesse de ses bibliothèques."
    },
    {
      displayName: 'photoshop',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/langfr-1024px-Adobe_Photoshop_CC_icon.svg.png',
      categoty:"design",
      description: "Photoshop est un logiciel de traitement d'images développé par Adobe. Il est utilisé pour créer, modifier et manipuler des images numériques, des photos et des graphiques. Les utilisateurs peuvent utiliser des outils de dessin, de retouche, de correction des couleurs et des filtres pour créer des images de haute qualité. Photoshop est largement utilisé dans l'industrie de la photographie, de la publicité et du design graphique."
    },
    {
      displayName: 'illustrator',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/langfr-1024px-Adobe_Illustrator_CC_icon.svg.png',
      categoty:"design",
      description:"Adobe Illustrator est un logiciel de dessin vectoriel utilisé pour créer des illustrations, des graphiques et des logos. Il est largement utilisé dans l'industrie du design graphique pour créer des designs de haute qualité pour l'impression et le web. Les utilisateurs peuvent dessiner des formes vectorielles, créer des motifs, des gradients et des effets spéciaux, ainsi que travailler avec des images raster pour créer des designs complexes. Illustrator est connu pour sa flexibilité et sa facilité d'utilisation, ainsi que pour son intégration étroite avec les autres applications Adobe Creative Suite, telles que Photoshop et InDesign."
    },
  ];
}
