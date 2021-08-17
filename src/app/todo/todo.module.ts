import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { TodoRoutingModule } from './todo-routing.module';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreateTaskComponent, ListTaskComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatListModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
