import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-range-picker',
  templateUrl: './range-picker.component.html',
  styleUrls: ['./range-picker.component.css']
})
export class RangePickerComponent implements OnInit {


  range = new FormGroup({
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
  });

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('es-es')
  }

  ngOnInit(): void {}


    }



