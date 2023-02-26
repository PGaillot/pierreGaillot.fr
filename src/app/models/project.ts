import { Skill } from "./skill";

export class Project {
    id!:number;
    displayName!: string;
    imgUrl!:string;
    description!:string;
    skillsId?:number[];
}