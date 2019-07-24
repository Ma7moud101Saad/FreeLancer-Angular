import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../job/job.service';
import { Jobclass } from '../job/jobclass';
import { SkillJobService } from '../shared/skill-job.service';
import { SkillOfJob } from '../shared/skill-of-job';
import { PorposalWithNameDtoService } from '../shared/porposal-with-name-dto.service';
import { PoprposalWithUserNameDto } from '../shared/poprposal-with-user-name-dto.model';
import { FreeLaService } from '../shared/service/free-la.service';

@Component({
  selector: 'app-porposal-show',
  templateUrl: './porposal-show.component.html',
  styleUrls: ['./porposal-show.component.css']
})
export class PorposalShowComponent implements OnInit {
  job:Jobclass=new Jobclass();
  jobId:number;
porposalWithName:PoprposalWithUserNameDto[]=[];

  OtherSkillsList:SkillOfJob[]=[];
  constructor(private activatedRoute: ActivatedRoute,private jobserv:JobService,private router:Router,
    private SkillJobSer:SkillJobService,private porposalWithNameServ:PorposalWithNameDtoService,private FreeServ:FreeLaService) { }

userId:string;
  ngOnInit() {
  //  this.userId =  localStorage.getItem("UserId");
  //   this.FreeServ.GetFreeLancerIdByUserId(this.userId).subscribe((data)=>{
  //     console.log("sdsssssssss"+data);

  //     localStorage.setItem("FreeLancerID", data.toString());
  //   })
    const JobId = this.activatedRoute.snapshot.params['Jobid'];

    this.jobId = JobId;

    this.jobserv.getJobById(this.jobId).subscribe((data)=>{
      this.job=data;
      console.log(data);
      this.SkillJobSer.GetOtherSkillOfJobId(this.jobId).subscribe((data)=>{
        this.OtherSkillsList = data;
        this.porposalWithNameServ.getallPorposal(this.jobId).subscribe((data)=>{
          this.porposalWithName = data;
        })
        });
    })
  }
  OnChanges()
  {
    const JobId = this.activatedRoute.snapshot.params['Jobid'];

    this.jobId = JobId;

    this.jobserv.getJobById(this.jobId).subscribe((data)=>{
      this.job=data;
      console.log(data);
      this.SkillJobSer.GetOtherSkillOfJobId(this.jobId).subscribe((data)=>{
        this.OtherSkillsList = data;
        this.porposalWithNameServ.getallPorposal(this.jobId).subscribe((data)=>{
          this.porposalWithName = data;
        })
        });
    })

  }

  goToAddPorposal(Jobid:number)
{
  console.log(Jobid);
  this.router.navigate(['/home/AddPorposal', Jobid ]);
}

}
