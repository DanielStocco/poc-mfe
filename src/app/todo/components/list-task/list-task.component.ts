import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
  tasks;
  constructor(private todoService: TodoService) {
    this.tasks = this.todoService.getTasks();
  }

  ngOnInit(): void {
  }

}
