import { Component, OnInit } from '@angular/core';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'app-check-box-opcionales',
  templateUrl: './check-box-opcionales.component.html',
  styleUrls: ['./check-box-opcionales.component.css']
})
export class CheckBoxOpcionalesComponent implements OnInit {

  task: Task = {
    name: 'Todos/Ninguno',
    completed: false,
    subtasks: [
      {name: 'CRA 001', completed: false},
      {name: 'CRA 002', completed: false},
      {name: 'CRA 003', completed: false},
      {name: 'CRA 004', completed: false},
      {name: 'CRA 005', completed: false},
      {name: 'CRA 006', completed: false},
      {name: 'CRA 007', completed: false},
      {name: 'CRA 008', completed: false},
      {name: 'CRA 009', completed: false},
      {name: 'CRA 010', completed: false},
      {name: 'CRA 011', completed: false},
      {name: 'CRA 012', completed: false},
      {name: 'CRA 013', completed: false},
      {name: 'CRA 014', completed: false},
      {name: 'CRA 015', completed: false},
      {name: 'CRA 016', completed: false},
      {name: 'CRA 017', completed: false},
      {name: 'CRA 018', completed: false},
      {name: 'CRA 019', completed: false},
      {name: 'CRA 020', completed: false},
      {name: 'CRA 021', completed: false},
      {name: 'CRA 022', completed: false},
      {name: 'CRA 023', completed: false},
      {name: 'CRA 024', completed: false},
      {name: 'CRA 025', completed: false},
      {name: 'CRA 026', completed: false},
      {name: 'CRA 027', completed: false},
      {name: 'CRA 028', completed: false},
      {name: 'CRA 029', completed: false},
      {name: 'CRA 030', completed: false},
      {name: 'CRA 031', completed: false},
      {name: 'CRA 032', completed: false},
      {name: 'CRA 033', completed: false},
      {name: 'CRA 034', completed: false},
      {name: 'CRA 035', completed: false},
      {name: 'CRA 036', completed: false},
      {name: 'CRA 037', completed: false},
      {name: 'CRA 038', completed: false},
      {name: 'CRA 039', completed: false},
      {name: 'CRA 040', completed: false},
      {name: 'CRA 041', completed: false},
      {name: 'CRA 042', completed: false},
      {name: 'CRA 043', completed: false},
      {name: 'CRA 044', completed: false},
      {name: 'CRA 045', completed: false},
      {name: 'CRA 046', completed: false},
      {name: 'CRA 047', completed: false},
      {name: 'CRA 048', completed: false},
      {name: 'CRA 049', completed: false},
      {name: 'CRA 050', completed: false},
      {name: 'CRA 051', completed: false},
      {name: 'CRA 052', completed: false},
      {name: 'CRA 053', completed: false},
      {name: 'CRA 054', completed: false},
      {name: 'CRA 055', completed: false},
      {name: 'CRA 056', completed: false},
      {name: 'CRA 057', completed: false},
      {name: 'CRA 058', completed: false},
      {name: 'CRA 059', completed: false},
      {name: 'CRA 060', completed: false},

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
