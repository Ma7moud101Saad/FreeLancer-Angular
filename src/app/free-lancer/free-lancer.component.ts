import { Component, OnInit } from '@angular/core';
import { FreeLanceDto } from '../shared/model/free-lance-dto.model';
import { FreeLaService } from '../shared/service/free-la.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-free-lancer',
  templateUrl: './free-lancer.component.html',
  styleUrls: ['./free-lancer.component.css']
})
export class FreeLancerComponent implements OnInit {
  freeLanc: FreeLanceDto;
  constructor(private FreeSer:FreeLaService,private activatedRoute: ActivatedRoute,private router:Router) { }
  userId:string;
  ngOnInit() {
    this.ResetForm();
    const ID = this.activatedRoute.snapshot.params['UserId'];
    this.userId = ID;
  }

  ResetForm(form?:NgForm)
  {
    if(form != null)
    form.reset();
    this.freeLanc={
      Location:"",
      OverView:"",
      UerAccountID:""
    }
  }

  city_names: string[] = [
    "اسيوط",
    "المنيا",
    "سوهاج",
    "قنا",
    "القاهرة",
    "الاسكندرية",
    "بورسعيد",
    "المنصورة",
    "المنوفية",
    "الجيزة",
    "البحر الاحمر",
    "البحيرة",
    " الغربية",
    "الشرقية"
  ];
freeLancerId:any;
  onSubmit(form:NgForm)
  {
    form.value.UerAccountID=this.userId;
    console.log(form.value);
    this.FreeSer.postFreeLancer(form.value).subscribe((data)=>{console.log("congratulation");
    this.freeLancerId = data;
    console.log(data);
    this.router.navigate(['/home/FreeLancerSkills',this.freeLancerId]);
  });


  }


}
