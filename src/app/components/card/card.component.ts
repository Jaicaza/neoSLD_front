import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/numbers.json';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


intermediateJson = data;

craForm = new FormGroup({
  firstInput: new FormControl('', Validators.required),
  secondInput: new FormControl('', Validators.required),
})


  constructor(private httpClient: HttpClient,
              private router:Router)

              {console.log(data);
              }

  ngOnInit(): void {
  }

  getData():void {
    this.httpClient.get("assets/numbers.json").subscribe(data =>{
      console.log(data);
    })
  }

  onSubmit() {
    if (this.craForm.valid) {
      console.log("Formulario guardado");
      this.router.navigate(['maqueta002']);
    }
    console.log(this.craForm.value);
  }


}
