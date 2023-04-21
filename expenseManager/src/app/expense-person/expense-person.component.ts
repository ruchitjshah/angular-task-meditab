import { Component, OnInit } from '@angular/core';


interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-expense-person',
  templateUrl: './expense-person.component.html',
  styleUrls: ['./expense-person.component.css'],
})
export class ExpensePersonComponent implements OnInit {
  cities: City[] | any;

  selectedCity: City | any;
  ngOnInit(): void {
    this.cities = [
      { name: 'Ruchit Shah', code: 'NY' },
      { name: 'Raj Patel', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
}
