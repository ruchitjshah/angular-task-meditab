import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../service/expenses.service';

@Component({
  selector: 'app-expense-history',
  templateUrl: './expense-history.component.html',
  styleUrls: ['./expense-history.component.css'],
})
export class ExpenseHistoryComponent implements OnInit {
  expensesArray: Array<any> = [];
  first: number = 0;
  rows: number = 6;

  constructor(private expenseService: ExpensesService) {}

  ngOnInit(): void {
    this.getAllExpenses();
    this.expenseService.loadExpenses.subscribe(() => {
      this.getAllExpenses();
    });
  }

  getAllExpenses() {
    this.expenseService.getAllExpenses().subscribe((value) => {
      this.expensesArray = value.reverse();
      // console.log(this.expensesArray);
    });
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
