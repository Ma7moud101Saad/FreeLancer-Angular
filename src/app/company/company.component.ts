import { Component, OnInit } from '@angular/core';
import { CompayDto } from '../shared/model/compay-dto.=model';
import { CompanyService } from '../shared/service/company.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company: CompayDto;
  constructor(private ComServ: CompanyService,private activatedRoute: ActivatedRoute,private router:Router) { }
  userId:string;
  ngOnInit() {
    this.ResetForm();
    const ID = this.activatedRoute.snapshot.params['UserId'];
    this.userId = ID;
  }


  ResetForm(form?: NgForm)
  {
    if(form != null)
    form.reset();
    this.company={
      CompanyName:"",
      CompanyLocation:"",
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

  onSubmit(form:NgForm)
  {
    form.value.UerAccountID=this.userId;
    console.log(form.value);
    this.ComServ.postCompany(form.value).subscribe((data)=>{console.log("congratulation")});
    this.router.navigate(['/home']);
  }
}
