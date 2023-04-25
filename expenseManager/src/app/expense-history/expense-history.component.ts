import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../service/expenses.service';

@Component({
  selector: 'app-expense-history',
  templateUrl: './expense-history.component.html',
  styleUrls: ['./expense-history.component.css'],
})
export class ExpenseHistoryComponent implements OnInit {
  expensesArray: Array<any> = [];

  constructor(private expenseService: ExpensesService) {}

  ngOnInit(): void {
    this.getAllExpenses();
    this.expenseService.loadExpenses.subscribe(() => {
      this.getAllExpenses();
    });
  }

  getAllExpenses() {
    this.expenseService.getAllExpenses().subscribe((value) => {
      this.expensesArray = value;
      console.log(this.expensesArray);
    });
  }
}
