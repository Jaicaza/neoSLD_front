import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxOpcionalesComponent } from './check-box-opcionales.component';

describe('CheckBoxOpcionalesComponent', () => {
  let component: CheckBoxOpcionalesComponent;
  let fixture: ComponentFixture<CheckBoxOpcionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBoxOpcionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxOpcionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
