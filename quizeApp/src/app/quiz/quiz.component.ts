import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  public timer: number = 10;
  public userName: string = '';
  public questionList: any = [];
  public currentQuestion: number = 0;
  public counter: number = this.timer;
  public points: number = 0;
  public correctAnswer: number = 0;
  public incorrectAnswer: number = 0;
  public interval$: any;

  isQuizCompleted: boolean = false;

  constructor(private questionService: QuestionService) {}
  ngOnInit() {
    this.userName = localStorage.getItem('name')!;
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions() {
    this.questionService.getQuestionsJson().subscribe((res) => {
      this.questionList = res.questions;
    });
  }

  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }

  answer(currentQno: number, option: any) {
    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
      }, 1000);
    } else {
      setTimeout(() => {
        this.incorrectAnswer++;
        this.currentQuestion++;
        this.resetCounter();
      }, 1000);
      this.points -= 10;
    }
  }

  startCounter() {
    this.interval$ = interval(1000).subscribe((val) => {
      this.counter--;
      if (this.counter === 0) {
        if (this.currentQuestion + 1 >= this.questionList.length) {
          this.isQuizCompleted = true;
          this.stopCounter();
        }

        this.currentQuestion++;
        this.counter = this.timer;
        this.points -= 10;
      }
    });

    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }

  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter() {
    this.stopCounter();
    this.counter = this.timer;
    this.startCounter();
  }

  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = this.timer;
    this.currentQuestion = 0;
  }
}
