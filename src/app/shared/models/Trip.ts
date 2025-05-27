export class Trip{
    id!:number;
    name!:string;
    price!:number;
    tag:string[] = [];
    stars: number = 0;
    imageUrl!:string;
    origin!:string[];
    information!:string[];
    schedule?: ScheduleItem[];
    combos?: Combo[];
}
export interface ScheduleItem {
    time: string;
    activity: string[];
}
export interface ComboOption {
    label: string;            
    price: number;                   
    note?: string;            
}
export interface Combo {
    id: number; 
    name: string;
    options: ComboOption[];
    description: string[];
  }