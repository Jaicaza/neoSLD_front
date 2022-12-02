import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {

  nafOpcionales: string[] = ['457787632891', '885441423664', '585554743621', '485546321966'];

  constructor() { }

  ngOnInit(): void {
  }

}
