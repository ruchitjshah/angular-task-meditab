import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

interface City {
  name: string;
  code: string;
}

interface Catagory {
  name: string;
  key: string;
}
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css'],
})
export class AddExpenseComponent implements OnInit {
  value: string = '';
  cities: City[] | any;

  selectedCity: City | any;

  categories: Catagory[] = [
    { name: 'Meet Vachhani', key: 'M' },
    { name: 'Raj Patel', key: 'P' },
    { name: 'Ruchit Shah', key: 'A' },
    { name: 'Saumya Shah', key: 'R' },
  ];
  selectedCategories: Catagory[] = [];

  messages: Message[] = [
    { severity: 'success', summary: 'Success', detail: 'Message Content' },
  ];

  ngOnInit(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
    ];

    this.messages = [
      { severity: 'success', summary: 'Success', detail: 'Message Content' },
    ];
  }
}
