import { Component, OnInit } from '@angular/core';
import { MembersService } from '../service/members.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, of } from 'rxjs';
import { ExpensesService } from '../service/expenses.service';

interface City {
  name: string;
  id: string;
}

interface Catagory {
  name: string;
  id: string;
}
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css'],
})
export class AddExpenseComponent implements OnInit {
  expenseForm = this.fb.group({
    expenseName: ['', Validators.required],
    distributeBetween: this.fb.array([]),
    paidBy: ['', Validators.required],
    totalAmount: [''],
  });

  members: Catagory[] = [];
  selectedMember: Catagory[] = [];
  paidByOptions: City[] | any;
  selectedPaidBy: City | any;
  totalAmount: number = 0;
  totalPerson: number = 0;

  isRupeeTrue: boolean = true;

  value: string = '';

  constructor(
    private expensesService: ExpensesService,
    private memberService: MembersService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((value) => {
      this.members = value;
      this.paidByOptions = value;
      for (let i = 0; i < this.members.length; i++) {
        this.setDistributeBetween(this.members[i].name);
      }
    });

    // console.log(this.expenseForm);
  }

  setDistributeBetween(memberName: string) {
    let distributeField = this.expenseForm.get(
      'distributeBetween'
    ) as FormArray;
    distributeField.push(
      this.fb.group({
        name: [memberName, Validators.required],
        amount: [{ value: 0, disabled: true }, Validators.required],
        isSelect: false,
      })
    );
  }

  onCheckboxChange(e: any) {
    console.log("hello");
    
    console.log(e);
    
  }

  onFormSubmit() {
    this.expensesService.removeUnincludedMember(this.expenseForm.value);
  }
}
