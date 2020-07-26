import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseOutputComponent } from './expense-output.component';

describe('ExpenseOutputComponent', () => {
  let component: ExpenseOutputComponent;
  let fixture: ComponentFixture<ExpenseOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
