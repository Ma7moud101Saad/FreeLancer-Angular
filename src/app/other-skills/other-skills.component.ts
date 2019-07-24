import { Component, OnInit } from '@angular/core';
import { JobSkillsService } from '../shredLast/job-skills.service';
import { Skill } from '../shredLast/skill.=model';
import { NgForm } from '@angular/forms';
import { JobSkills } from '../shredLast/job-skills.=';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-other-skills',
  templateUrl: './other-skills.component.html',
  styleUrls: ['./other-skills.component.css']
})
export class OtherSkillsComponent implements OnInit {
  JobIdd:number;
  constructor(private JobSkillServ: JobSkillsService,private activatedRoute:ActivatedRoute,private router:Router) { }


  skill:Skill;
  listOfSkills:Skill[]=[];


  ngOnInit() {
    const JobId = this.activatedRoute.snapshot.params['Jobid'];
    this.JobIdd = JobId;
    this.ResetForm()
  }
  ResetForm(form?:NgForm)
  {
    if(form != null)
    form.reset();
    this.skill={
      index:null,
      skill_name:""
    }

  }

  index:number=0;
  skill_name :string;
  addToList(form:NgForm)
  {
    if(form.value.skill_name !=undefined)
    {
    this.skill.index =this.index;
    this.skill.skill_name = form.value.skill_name ;

    console.log('form1');

    console.log(form.value.skill_name);

    this.listOfSkills.push(this.skill);
    this.skill = new Skill();
    this.index ++;
  }

  }
  //--------------Add all skills --------------------
  JobSkillObj:JobSkills;
  SkillsName:string[]=[];
  AddAllSkills(JobId:number)
  {
    for(var item  of this.listOfSkills)
    {
      this.SkillsName.push(item.skill_name);
    }

    this.JobSkillObj= new JobSkills();
    this.JobSkillObj.JobId = JobId;
    this.JobSkillObj.listOfSkills =  this.SkillsName;
    console.log(this.JobSkillObj.JobId);
    console.log(this.JobSkillObj.listOfSkills);
    this.JobSkillServ.postJobSkills(this.JobSkillObj).subscribe((res)=>{console.log("Congratolation");
    this.router.navigate(['/home/Porposal', JobId ]);
  });
  }
  //--------------delete skills-----------------------
  DeleteSkill(item: Skill)
  {

    var index = this.listOfSkills.indexOf(item);
    if (index > -1) {
      this.listOfSkills.splice(index, 1);
    }
    console.log(this.listOfSkills);

  }



}
