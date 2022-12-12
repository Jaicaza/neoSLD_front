import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maqueta003Component } from './maqueta003.component';

describe('Maqueta003Component', () => {
  let component: Maqueta003Component;
  let fixture: ComponentFixture<Maqueta003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Maqueta003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Maqueta003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
