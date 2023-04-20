import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensePersonComponent } from './expense-person.component';

describe('ExpensePersonComponent', () => {
  let component: ExpensePersonComponent;
  let fixture: ComponentFixture<ExpensePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensePersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
