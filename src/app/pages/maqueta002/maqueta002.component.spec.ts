import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maqueta002Component } from './maqueta002.component';

describe('Maqueta002Component', () => {
  let component: Maqueta002Component;
  let fixture: ComponentFixture<Maqueta002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Maqueta002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Maqueta002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
