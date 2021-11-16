import { ToDo2Item } from "./todo2items";

export class Model {
    name:string;
    items : ToDo2Item[]

    constructor() {
        this.name = "Sadık";
        this.items = [
            {description:"kahvaltı",action:true},
            {description:"spor",action:true},
            {description:"alışveriş",action:false}
        ];
        // this.items = [
            
        // ];
    }

}


