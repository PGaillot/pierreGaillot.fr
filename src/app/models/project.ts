import { Skill } from "./skill";

export class Project {
    displayName!: string;
    imgUrl!:string;
    description!:string;
    skills?:Skill[];
}