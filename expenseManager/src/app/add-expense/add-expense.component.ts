import { Component, OnInit } from '@angular/core';
import { MembersService } from '../service/members.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpensesService } from '../service/expenses.service';
import { formatDate } from '@angular/common';
import { Observable } from 'rxjs';

interface IMembers {
  name: string;
  id: string;
}

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css'],
})
export class AddExpenseComponent implements OnInit {
  currentDate = new Date();
  expenseForm = this.fb.group({
    expenseName: ['', Validators.required],
    distributeBetween: this.fb.array([]),
    paidBy: ['', Validators.required],
    totalAmount: [''],
    totalPerson: [''],
    date: [formatDate(this.currentDate, 'dd/MM/yyyy', 'en-US')],
  });

  members: IMembers[] = [];
  selectedMember: IMembers[] = [];
  selectedPaidBy: IMembers | any;
  totalAmount: number = 0;
  totalPerson: number = 0;

  isRupeeTrue: boolean = true;

  constructor(
    private expensesService: ExpensesService,
    private memberService: MembersService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getMembersForDistribute();
  }

  getMembersForDistribute() {
    this.memberService.getMembers().subscribe((value) => {
      this.members = value;
      for (let i = 0; i < this.members.length; i++) {
        this.setDistributeBetween(this.members[i].name);
      }
    });
  }

  setDistributeBetween(memberName: string) {
    let distributeField = this.expenseForm.get(
      'distributeBetween'
    ) as FormArray;
    distributeField.push(
      this.fb.group({
        name: [{ value: memberName, disabled: true }],
        amount: [{ value: 0, disabled: true }],
        isSelect: [false],
      })
    );
  }

  get allCheckBoxControls() {
    return this.expenseForm.controls.distributeBetween.controls;
  }
  onCheckboxChange(amount: HTMLInputElement, i: number) {
    if (this.allCheckBoxControls[i].get('isSelect')?.value.length) {
      this.allCheckBoxControls[i].get('amount')?.enable();
      this.allCheckBoxControls[i].get('name')?.enable();
      this.totalPerson += 1;
    } else {
      this.allCheckBoxControls[i].get('amount')?.disable();
      this.allCheckBoxControls[i].get('name')?.disable();
      this.totalPerson -= 1;
      amount.value = '0';
      this.calcTotalAmount(amount, i);
    }
  }

  tempTotalAmount: Array<number> = [0];
  calcTotalAmount(amount: HTMLInputElement, i: number) {
    if (this.allCheckBoxControls[i].get('isSelect')?.value.length) {
      this.tempTotalAmount[i] = Number(amount.value);
      this.totalAmount = this.tempTotalAmount.reduce(
        (acc, cur) => acc + Number(cur),
        0
      );
    } else {
      this.tempTotalAmount[i] = 0;
      this.totalAmount = this.tempTotalAmount.reduce(
        (acc, cur) => acc + Number(cur),
        0
      );
    }
  }

  onFormSubmit() {
    this.expenseForm.get('totalAmount')?.setValue(this.totalAmount.toString());
    this.expenseForm.get('totalPerson')?.setValue(this.totalPerson.toString());
    this.expensesService
      .addexpense(this.expenseForm.value)
      .subscribe((value) => {});

    this.expenseForm.reset();
    this.tempTotalAmount = [0];
    this.totalPerson = 0;
    this.totalAmount = 0;
    this.expensesService.loadExpenses.emit();
  }
}
