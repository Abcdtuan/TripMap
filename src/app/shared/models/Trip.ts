export class Trip{
    id!:number;
    name!:string;
    tag!:string[];
    favorite:boolean = false;
    stars: number = 0;
    imageUrl!:string;
    origins!:string[];
}