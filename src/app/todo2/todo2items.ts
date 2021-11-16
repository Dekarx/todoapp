// export class ToDo2Item {
//     description :string; // "strictNullChecks": false , hata almamk için tsconfig.json a ekle
//     action : string

//     constructor(description : string ,action : string){
//         this.description = description;
//         this.action = action;
//     }

// }

// const td = new ToDo2Item("spor","yes");

//* ---

// export class ToDo2Item {

//     constructor(public description : string ,public action : string){
//         this.description = description;
//         this.action = action;
//     }

// }


//* ---

export interface ToDo2Item {

    description :string;
    action : boolean

}




