import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  // selector: '.app-root',
  // selector: '#app-root',
  selector: 'app',

  // template : `
  // <h1>app companent</h1>
  // <h2>{{title}}</h2>
  // <h2>{{getTitle()}}</h2>
  // <p>
  //     {{toDoItem.description}}
  //     {{toDoItem.action}}
  // </p>    `,

  templateUrl: './app.component.html',


  // styleUrls: ['./app.component.css']
  styles : [
    `
    p {
      color : red;
    }
    `
  ] //styleUrls ekleme yerine ayrı bir şekil

})


export class AppComponent {
  title = 'To Do App';

  getTitle(){
    return this.title;
  }

  toDoItem = {
    description : "kahvaltı",
    action : true
  }

}
