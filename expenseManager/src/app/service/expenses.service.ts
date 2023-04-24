import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  constructor() {}

  removeUnincludedMember(expenseObj: any) {
    let temp: any = [];
    for (let i = 0; i < expenseObj.distributeBetween.length; i++) {
      if (expenseObj.distributeBetween[i].isSelect.length) {
        temp.push(expenseObj.distributeBetween[i]);
      }
    }
    
    expenseObj.distributeBetween = temp;
    console.log(expenseObj.distributeBetween);
  }
}
