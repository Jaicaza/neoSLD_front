import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent implements OnInit {

  @Input() mesAnio1!: any;
  @Input() mesAnio2!: any;

  @Input() periodo!:any;

  form003 = new FormGroup({
  });

  constructor() { }

  ngOnInit(): void {
  }

  panelOpenState = false;
}
