import { Component, OnInit } from '@angular/core';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {

  task: Task = {
    name: 'Todos/Ninguno',
    completed: false,
    subtasks: [
      {name: 'CRA 001', completed: false},
      {name: 'CRA 002', completed: false},
      {name: 'CRA 003', completed: false}
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
