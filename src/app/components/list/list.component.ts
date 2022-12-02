import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  nafObligatorio: string[] = ['123123123145', '145478554261', '284544786323'];

  constructor() { }

  ngOnInit(): void {
  }

}
