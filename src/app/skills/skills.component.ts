import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FreeLancerSkillsService } from '../shredLast/free-lancer-skills.service';
import { Skill } from '../shredLast/skill.=model';
import { NgForm } from '@angular/forms';
import { FreeLancerSkills } from '../shredLast/free-lancer-skills.=';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  freeLancId:number;
  constructor(private freeLancerSkillServ: FreeLancerSkillsService,private activatedRoute:ActivatedRoute,private router:Router)
  {

  }
  skill:Skill;
  listOfSkills:Skill[]=[];


  ngOnInit() {
    const FreeLancerID = this.activatedRoute.snapshot.params['FreeLancerID'];
    this.freeLancId = FreeLancerID;
    this.ResetForm();
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
  //--------------------------------------------Addskills----------------------------
  FreeLancerSkillObj:FreeLancerSkills;
  SkillsName:string[]=[];
  AddAllSkills(freelancerId:number)
  {
    for(var item  of this.listOfSkills)
    {
      this.SkillsName.push(item.skill_name);
    }

    this.FreeLancerSkillObj= new FreeLancerSkills();
    this.FreeLancerSkillObj.FreeLancerID = freelancerId;
    this.FreeLancerSkillObj.listOfSkills =  this.SkillsName;
    console.log(this.FreeLancerSkillObj.FreeLancerID);
    console.log(this.FreeLancerSkillObj.listOfSkills);
    this.freeLancerSkillServ.postFreeLancerSkills(this.FreeLancerSkillObj).subscribe((res)=>{console.log("Congratolation");
    this.router.navigate(['/home']);
  });
  }
  //-------------------------------------------------------------------------------------
  DeleteSkill(item: Skill)
  {

    var index = this.listOfSkills.indexOf(item);
    if (index > -1) {
      this.listOfSkills.splice(index, 1);
    }
    console.log(this.listOfSkills);

  }




}
