import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../shared/service/test.service';
import { QuestionService } from '../shared/service/question.service';
import { DtouserAnswer } from '../shared/model/dtouser-answer.=model';
import { Questions } from '../shared/model/questions.=model';
import { NgForm } from '@angular/forms';
import { QuizService } from '../shared/service/quiz.service';
import { TestResultService } from '../shared/service/test-result.service';
import { TestResult } from '../shared/model/test-result.=';
import { FreeLaService } from '../shared/service/free-la.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  //Global variables
  testId: number;
  Totaldegree:number=0;
  t:string;
  dtoUserAnsw:DtouserAnswer;
  numberOfQuestion:number=0;
  listOfQuestionByTestLid: Questions[]=[];

  grade:any=0;
  Precent:any=0;
  result:string;
  testResult:TestResult = new TestResult();
  FreeLancerId:number;
  constructor(private router:Router,private activatedRoute: ActivatedRoute,
    private testServ: TestService ,private QuestionServ: QuestionService,private QuizServ: QuizService,
    private testResultServ:TestResultService,private freeLancerServ:FreeLaService) { }

  ngOnInit() {

    localStorage.setItem("totalGrader", "0");
    this.ResetForm();
    const TestId = this.activatedRoute.snapshot.params['TestId'];
    this.testId = TestId;
    console.log("Quiz"+this.testId);
    this.testServ.GetTestById(this.testId).subscribe((data) => {this.t= data.test_name;} );

    this.QuestionServ.GetAllQuestionOfTestId(this.testId).subscribe((data) =>{this.listOfQuestionByTestLid = data;

      this.listOfQuestionByTestLid.forEach(element => {
        this.Totaldegree = this.Totaldegree + element.degree;
        this.numberOfQuestion =this.numberOfQuestion+1;


    });
    console.log(this.Totaldegree);
    console.log(this.numberOfQuestion);

    var duration = 60 * this.numberOfQuestion,
    display = document.querySelector('#time');
    this.startTimer(duration, display);

    this.freeLancerServ.GetFreeLancerIdByUserId(localStorage.getItem("UserId")).subscribe((data)=>{
      this.FreeLancerId = data;
      console.log(this.FreeLancerId);
    })


    })


  }

  ngOnChanges(){
  localStorage.setItem("totalGrader", "0");
  }
  ResetForm(form?:NgForm)
  {

    this.dtoUserAnsw={
      UserAnsw:null,
      QuestionID:null,
      testId:null,
      FreeLancerId:null
    }

  }
  flagRadioButton:boolean= null;

  checked(bol: boolean)
  {
    this.flagRadioButton = bol;
  }

  AddQuiz(QuestionID)
  {
   if( this.flagRadioButton != null)
   {
    //console.log(QuestionID.value);
    this.dtoUserAnsw.UserAnsw = this.flagRadioButton;
    this.dtoUserAnsw.QuestionID = QuestionID.value;
    this.dtoUserAnsw.testId =  this.testId;

    this.dtoUserAnsw.FreeLancerId = this.FreeLancerId ;//take from shenoda

    console.log(this.dtoUserAnsw);
    this.QuizServ.postDtoUserAnswer(this.dtoUserAnsw).subscribe((data) => {this.grade  =this.grade + data;
    console.log(this.grade);
     this.Precent = ( this.grade /this.Totaldegree ) *100;

    //  ------------
    this.Precent = Math.ceil(this.Precent);
    if(this.Precent>85)
      {
        this.result ="أمتياز";
      }
      else if(this.Precent>75)
      {
        this.result="جيد جداً";
      }
      else if(this.Precent>65)
      {
        this.result ="جيد";
      }
      else if(this.Precent>50)
      {
        this.result ="مقبول";
      }
      else
      {
        this.result ="ضعيف";
      }

    localStorage.setItem("totalGrader", this.Precent+"%" +"التقدير "+ this.result);
    });
    this.flagRadioButton = null;

  }
  }
  goToResult(){
    console.log("asd");
    this.testResult.FreeLancerObjId =this.FreeLancerId;
    this.testResult.score =this.Precent;
    this.testResult.test_Name = this.t;
    this.testResult.testObjId =this.testId;

    this.testResultServ.postTestResult(this.testResult).subscribe((data)=>{console.log("congratultion")});

  this.router.navigate(['home/TestResult']);
}

startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = Math.floor(timer / 60);
      seconds = Math.floor(timer % 60);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
         //---------------------

         this.goToResult();



         //--------------------
      }
  }.bind(this).bind(this), 1000);
}

  disableButton($event) {
    $event.currentTarget.disabled = true;
};


}
