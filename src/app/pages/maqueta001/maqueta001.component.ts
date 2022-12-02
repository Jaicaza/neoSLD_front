import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-maqueta001',
  templateUrl: './maqueta001.component.html',
  styleUrls: ['./maqueta001.component.css']
})
export class Maqueta001Component implements OnInit {

  craForm = new FormGroup({
    firstInput: new FormControl('', Validators.required),
    secondInput: new FormControl('', Validators.required),
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.craForm.valid) {
      console.log("Formulario guardado");
    }
    console.log(this.craForm.value);
  }
}
