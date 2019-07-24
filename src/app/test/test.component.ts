import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared/service/test.service';
import { Router } from '@angular/router';
import { Test } from '../shared/model/test.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testServ:TestService,private router:Router) { }
  test:Test;
  ngOnInit() {
    this.ResetForm();
  }
  ResetForm(form?:NgForm)
  {
    if(form != null)
    form.reset();
    this.test={
      id:null,
      test_name:""
    }

  }
  testId:any;
  addTest(form:NgForm)
  {
    this.testServ.PostTest(form.value).subscribe((res)=>{this.testId = res;
      console.log(typeof(this.testId));
      this.router.navigate(['adminPanel/Qustions',this.testId ]);
    })


  }


}
