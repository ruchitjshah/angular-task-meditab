import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  
  loadExpenses: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) {}

  removeUnincludedMember(expenseObj: any) {
    let temp: any = [];
    for (let i = 0; i < expenseObj?.distributeBetween.length; i++) {
      if (expenseObj.distributeBetween[i].isSelect.length) {
        temp.push(expenseObj.distributeBetween[i]);
      }
    }
    expenseObj.distributeBetween = temp;
    return expenseObj;
  }

  addexpense(expenseObj: any) {
    return this.http.post(
      'http://localhost:3000/expenses',
      this.removeUnincludedMember(expenseObj)
    );
  }

  getAllExpenses() {
    return this.http.get<any>('http://localhost:3000/expenses');
  }
}
