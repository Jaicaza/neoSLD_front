import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {



  form002 = new FormGroup({
  });

  nafObligatorio: string[] = ['123123123145 - RMH', '145478554261 - CFG', '284544786323 - CAF'];



  constructor(private router:Router) { }

  ngOnInit(): void { }

  onSubmit() {
      this.router.navigate(['maqueta003']);
    }



  }
