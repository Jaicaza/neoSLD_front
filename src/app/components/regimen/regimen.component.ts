import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-regimen',
  templateUrl: './regimen.component.html',
  styleUrls: ['./regimen.component.css']
})
export class RegimenComponent implements OnInit {

  public regimen: FormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("^[0-9]*$")]);

  getErrorMessage() {
    if (this.regimen.hasError('required')) {
      return 'Debes introducir un número';
    }

    return this.regimen.hasError('pattern') ? 'El formato es incorrecto' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
