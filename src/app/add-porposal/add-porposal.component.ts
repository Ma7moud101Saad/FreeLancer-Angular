import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PorposalDto } from '../shared/porposal-dto';
import { NgForm } from '@angular/forms';
import { PorposalService } from '../shared/porposal.service';
import { FreeLaService } from '../shared/service/free-la.service';

@Component({
  selector: 'app-add-porposal',
  templateUrl: './add-porposal.component.html',
  styleUrls: ['./add-porposal.component.css']
})
export class AddPorposalComponent implements OnInit {
  jobId: number;
  porposal: PorposalDto;
  freeLancerId :number;
  userId:string;
  constructor(private activatedRoute: ActivatedRoute,private porposalServ:PorposalService,private router:Router
    ,private FreeServ:FreeLaService) { }

  ngOnInit() {
    console.log("Add  "+Number(localStorage.getItem("FreeLancerID")) );
    this.userId =  localStorage.getItem("UserId");
    this.FreeServ.GetFreeLancerIdByUserId(this.userId).subscribe((data)=>{
        this.freeLancerId = data;
        console.log(this.freeLancerId);


    })

    // this.freeLancerId = Number(localStorage.getItem("FreeLancerID"));
    this.ResetForm()
    const JobId = this.activatedRoute.snapshot.params['Jobid'];
    this.jobId = JobId;

  }
  ResetForm(form?:NgForm)
  {
    if(form != null)
    form.reset();
    this.porposal={
      payment_amount:null,
      freelancer_comment:"",
      freeLancerObjId:null,
      JobObjId:null

    }

  }

  onSubmit(form:NgForm)
  {
    form.value.JobObjId=this.jobId;
    form.value.freeLancerObjId =   this.freeLancerId ;
    console.log(form.value);
    this.porposalServ.postPorposal(form.value).subscribe((data)=>{console.log("congratulation")});
    this.router.navigate(['/home/Porposal', this.jobId ]);
  }






}
