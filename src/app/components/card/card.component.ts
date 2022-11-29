import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/numbers.json';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


intermediateJson = data;

craForm = new FormGroup({
  firstInput: new FormControl(''),
  secondInput: new FormControl(''),
})


  constructor(private httpClient: HttpClient) {
      console.log(data);
    }

  ngOnInit(): void {
  }

  /*getData():void {
    this.httpClient.get("assets/numbers.json").subscribe(data =>{
      console.log(data);
    })
  }*/

  onSubmit() {
    console.log(this.craForm.value);
  }

}
