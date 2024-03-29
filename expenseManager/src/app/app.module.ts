import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseHistoryComponent } from './expense-history/expense-history.component';
import { ExpensePersonComponent } from './expense-person/expense-person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaincomponentComponent,
    AddExpenseComponent,
    ExpenseHistoryComponent,
    ExpensePersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    MessageModule,
    MessagesModule,
    ChipModule,
    CardModule,
    AccordionModule,
    TabViewModule,
    ToastModule,
    PaginatorModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
