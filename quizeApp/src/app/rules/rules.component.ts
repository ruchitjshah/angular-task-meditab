import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent {

  constructor(private router: Router){}

  submitName(name: string){
    if(name == ""){
      alert("Please Enter Your Name !!")
    }
    else{
      localStorage.setItem("name", name);
      this.router.navigate(['home/quiz']);
    }
  }

}
