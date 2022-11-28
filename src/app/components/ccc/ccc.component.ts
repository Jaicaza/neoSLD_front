import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ccc',
  templateUrl: './ccc.component.html',
  styleUrls: ['./ccc.component.css']
})
export class CccComponent implements OnInit {

  public ccc: FormControl = new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern("^[0-9]*$")]);

  getErrorMessage() {
    if (this.ccc.hasError('required')) {
      return 'Debes introducir un número';
    }

    return this.ccc.hasError('pattern') ? 'El formato es incorrecto' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
