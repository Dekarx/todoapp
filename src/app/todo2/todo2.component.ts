import { Component } from '@angular/core';
import { Model } from './model';
import { ToDo2Item } from './todo2items';

@Component({
  selector: 'app-todo2',
  templateUrl: './todo2.component.html',
  styleUrls: ['./todo2.component.css']
})


export class Todo2Component {

  constructor() { 
    this.model.items = this.getItemsFromLS()
  }

  // private name :string = "Sadık Turan";

  // items = [
  //   "item1","item2","item3","item4"
  // ]

  // items : any[] = [
  //   {id:1,description:"kahvaltı",action:"yes"},
  //   {id:2,description:"spor",action:"yes"},
  //   {id:3,description:"alışveriş",action:"no"}
  // ]

  // items : ToDo2Item[] = [
  //   {id:1,description:"kahvaltı",action:"yes"},
  //   {id:2,description:"spor",action:"yes"},
  //   {id:3,description:"alışveriş",action:"no"}
  // ]

  // items : ToDo2Item[] = [
  //   {description:"kahvaltı",action:"yes"},
  //   {description:"spor",action:"yes"},
  //   {description:"alışveriş",action:"no"}
  // ]

  // items : ToDo2Item[] = [
  //   new ToDo2Item("kahvaltı","yes"),
  //   new ToDo2Item("spor","yes"),
  //   new ToDo2Item("alışveriş","no")
  // ]

  //   items : ToDo2Item[] = [
  //   {description:"kahvaltı",action:"yes"},
  //   {description:"spor",action:"yes"},
  //   {description:"alışveriş",action:"no"}
  // ]

  model = new Model();

  // message = ""

  // getName(){
  //   return this.name;
  // }

  getName(){
    return this.model.name;
  }

  getItems(){
    if(this.displayAll){
      return this.model.items;
    }
    return this.model.items.filter(item=> !item.action) //
  }

  // addItem(input : any) {
  //   console.log(input.value);
  // }

  // addItem(value : string) {
  //   console.log(value);
  //   this.message = value
  // }

  // addItem(value : string) {
  //   if(value!=""){
  //     this.model.items.push({description: value ,action:false})
  //   }
  //   else{
  //     alert("Bilgi girilmedi !")
  //   }
  // }

  addItem() {
    if(this.inputText!=""){
      let data = {description: this.inputText ,action:false}
      this.model.items.push(data)

      // let items = []
      let items = this.getItemsFromLS()
      items.push(data)

      localStorage.setItem("items",JSON.stringify(items))
      // this.model.items.push({description: this.inputText ,action:false})

      this.inputText = ""
    }
    else{
      alert("Bilgi girilmedi !")
    }
  }

  displayAll :  boolean = false

  displayCount(){
    return this.model.items.filter(i=>i.action).length
  }

  inputText : string = ""

  getBtnClasses() {
    return {
      'disabled' : this.inputText.length == 0,
      'btn-danger' : this.inputText.length == 0,
      'btn-success' : this.inputText.length > 0
    }
  }

  getItemsFromLS() {
    let items : ToDo2Item[] = []

    let value = localStorage.getItem("items")

    if(value != null){
      items = JSON.parse(value)
    }

    return items;
  }

  onActionChanged(item : ToDo2Item) {
    // console.log(item);

    let items = this.getItemsFromLS()

    localStorage.clear()

    items.forEach( i => {
      if(i.description == item.description) {
        i.action = item.action
      }
    })
    localStorage.setItem("items",JSON.stringify(items))
  }

}
