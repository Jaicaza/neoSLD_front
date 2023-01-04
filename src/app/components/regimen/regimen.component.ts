import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-regimen',
  templateUrl: './regimen.component.html',
  styleUrls: ['./regimen.component.css'],
})
export class RegimenComponent implements OnInit {
  myControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("^[0-9]*$")]);
  options: string[] = [
    '0035',
    '0113',
    '0287',
    '7379',
    '9478',
    '8511',
    '0687',
    '0714',
    '1877',
    '0932',
    '1002',
    '1145',
    '1266',
  ];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
