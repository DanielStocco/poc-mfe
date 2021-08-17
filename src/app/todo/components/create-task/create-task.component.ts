import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,private todoService: TodoService) { 
    this.form = this.formBuilder.group({
      'description' : [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  createTask() {
    if (this.form.valid) {
      this.todoService.addTask(this.form.value);
      this.form.reset();
    }
  }
}
