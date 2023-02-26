import { Skill } from "./skill";

export class Project {
    id!:number;
    displayName!: string;
    iconUrl?:string;
    imgUrl!:string;
    gitUrl?:string;
    description!:string;
    skillsId?:number[];
    screenshots?:string[];
}