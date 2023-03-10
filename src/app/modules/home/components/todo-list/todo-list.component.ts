import { Component, DoCheck } from '@angular/core';

import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = [
    { task: "Minha nova task ", checked: true},
    { task: "Minha nova task 23 ", checked: false},
  ];

  constructor() {}

  ngDoCheck(): void {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked) )
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false})
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você deseja realmente Deletar tudo?")
    if(confirm)
      this.taskList = [ ]
  }

  public validationInput(event: string, index: number){
    console.log(event)
    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja Deletar?")
      if(confirm){
        this.deleteItemTaskList(index)
      }
    }
  }
}
