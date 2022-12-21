import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent implements OnInit {

  form003 = new FormGroup({
  });

  constructor() { }

  ngOnInit(): void {
  }

  panelOpenState = false;
}
