import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maqueta001Component } from './maqueta001.component';

describe('Maqueta001Component', () => {
  let component: Maqueta001Component;
  let fixture: ComponentFixture<Maqueta001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Maqueta001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Maqueta001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
