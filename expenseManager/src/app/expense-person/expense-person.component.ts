import { Component, OnInit } from '@angular/core';
import { MembersService } from '../service/members.service';

interface IMembers {
  name: string;
  id: string;
}
@Component({
  selector: 'app-expense-person',
  templateUrl: './expense-person.component.html',
  styleUrls: ['./expense-person.component.css'],
})
export class ExpensePersonComponent implements OnInit {
  members: IMembers[] = [];
  // selectedMember: IMembers[] = [];
  selectedPerson: IMembers | any;
  constructor(private memberService: MembersService) {}
  ngOnInit(): void {
    this.getmembers();
  }

  getmembers() {
    this.memberService.getMembers().subscribe((value) => {
      this.members = value;
    });
  }
}
