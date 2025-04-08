export class Trip{
    id!:number;
    name!:string;
    price!:number;
    tag:string[] = [];
    favorite:boolean = false;
    stars: number = 0;
    imageUrl!:string;
    origins!:string[];
    information!:string[];
    schedule?: ScheduleItem[];
    combos?: { name: string; price: number; description: string[] }[]; 

    
}
export interface ScheduleItem {
    time: string;
    activity: string[];
}
