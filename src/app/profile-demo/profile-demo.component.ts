import { Component, OnInit } from '@angular/core';
import { Test } from '../shared/model/test.model';
import { Router } from '@angular/router';
import { TestService } from '../shared/service/test.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-demo',
  templateUrl: './profile-demo.component.html',
  styleUrls: ['./profile-demo.component.css']
})
export class ProfileDemoComponent implements OnInit {
  test:Test;
  ListOfTeses:Test[]=[];
  constructor(private router:Router,private testServ:TestService) { }

  ngOnInit() {
    this.ResetForm();
    this.testServ.GetAllTests().subscribe((data)=>{this.ListOfTeses = data});
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
  goToTest(form:NgForm)
  {
  //  console.log(form.value.id);
    this.router.navigate(['/home/Quiz', form.value.id ]);
  }

}
