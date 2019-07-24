import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../shared/service/question.service';
import { NgForm } from '@angular/forms';
import { AddQuestionToTest } from '../shared/model/add-question-to-test.=';
import { Questions } from '../shared/model/questions.=model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  AddQuestionBoj:AddQuestionToTest;
  constructor(private activatedRoute: ActivatedRoute,private QuestionServ:QuestionService) { }
  testId:number;
  ngOnInit() {
    this.ResetForm()
    const TestId = this.activatedRoute.snapshot.params['TestId'];
    this.testId = TestId;
    this.QuestionServ.GetAllQuestionOfTestId(this.testId).subscribe((data) =>{this.listOfQuestionByTestLid = data; })
  }

  ResetForm(form?:NgForm)
  {
    if(form != null)
    form.reset();
    this.AddQuestionBoj={
      Question:"",
      degree:null,
      TestId:null,
      correctAnswer:null
    }

  }
  listOfQuestionByTestLid:Questions[]=[];
  addQuestion(form:NgForm)
  {
    form.value.TestId = this.testId;
    console.log(form.value);
    this.QuestionServ.PostQuestion(form.value).subscribe((res)=>{console.log("Question is Added");
    this.QuestionServ.GetAllQuestionOfTestId(this.testId).subscribe((data) =>{this.listOfQuestionByTestLid = data; })
  });


  }

}
