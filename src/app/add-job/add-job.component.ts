import { Component, OnInit } from '@angular/core';
import { Jobclass } from '../job/jobclass';
import { Job } from '../shared/job.model';
import { Catogies } from '../shared/catogies';
import { CatogiesService } from '../shared/catogies.service';
import { JobService } from '../job/job.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { HireMangerService } from '../shared/service/hire-manger.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  model;
  categoryList: Catogies[];
  newJob: Job;
  constructor(
    private _categoryService: CatogiesService,
    private _jobService: JobService,
    private _router: Router,
    private toastr: ToastrService,
    private HireServ:HireMangerService
  ) {
    // this.newJob=new Job()
  }
  userId:string;
  HireManagerId:number;
  ngOnInit() {
    this.userId =  localStorage.getItem("UserId");
    this._categoryService.getAllCategories().subscribe(
      data => {
        this.categoryList = data;
        this.HireServ.GetHireMangerIdByUserId(this.userId).subscribe((data)=>{
          this.HireManagerId = data;
          console.log(this.HireManagerId);

      });
      },
      err => {
        console.error(err);
      }



    );
  }

  submit(f: NgForm) {
     f.value.HireManagerId = this.HireManagerId ; //Chang This *************************
    this._jobService.postJob(f.value).subscribe(
      data => {
        this.newJob = data;
        console.log(this.newJob);
        this.toastr.success("تم اضافه الوظيفه بنجاح !");
        this._router.navigate(['/home/JobSkills', this.newJob ]);
      },
      err => console.error(err)
    );
    console.log(f.value);
  }

}
