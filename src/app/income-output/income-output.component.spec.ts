import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeOutputComponent } from './income-output.component';

describe('IncomeOutputComponent', () => {
  let component: IncomeOutputComponent;
  let fixture: ComponentFixture<IncomeOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
