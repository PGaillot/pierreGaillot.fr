import { ExternalLink } from "./externalLink";
import { Skill } from "./skill";

export class Project {
    id!:number;
    displayName!: string;
    motivation!:string;
    iconUrl?:string;
    imgUrl!:string;
    gitUrl?:string;
    description!:string;
    skillsId?:number[];
    screenshots?:string[];
    color?:string;
    links?:ExternalLink[];
}