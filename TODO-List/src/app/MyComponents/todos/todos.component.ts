import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent  {
  todos:Todo[];
  constructor()
  {
    this.todos=[
      {
        sno:1,
        tittle:"this is tittle1",
        desc:"description",
        active:true
      }, {
        sno:2,
        tittle:"this is tittle2",
        desc:"description2",
        active:true
      }, {
        sno:3,
        tittle:"this is tittle3",
        desc:"description3",
        active:true
      }

    ]
  }


}
