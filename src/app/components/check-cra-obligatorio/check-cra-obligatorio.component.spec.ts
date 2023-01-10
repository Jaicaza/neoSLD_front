import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCraObligatorioComponent } from './check-cra-obligatorio.component';

describe('CheckCraObligatorioComponent', () => {
  let component: CheckCraObligatorioComponent;
  let fixture: ComponentFixture<CheckCraObligatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCraObligatorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCraObligatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
