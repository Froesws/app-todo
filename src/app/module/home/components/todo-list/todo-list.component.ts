import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList:Array<TaskList> = [
    {task:"Minha Nova tast", checked:true},
    {task:"Minha Nova tast 2", checked:false}];
  constructor() { }

  ngOnInit(): void {
  }
  
  public deleteItemTaskList(event: number) {
    this.taskList.splice(event,1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Are you sure? All items will be removed.");
    if(confirm){
      this.taskList = [];
    }
  }
}

