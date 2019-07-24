import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HireMangerService } from '../shared/service/hire-manger.service';
import { HireManger } from '../shared/model/hire-manger.model';
import { Compay } from '../shared/model/compay.=';
import { CompanyService } from '../shared/service/company.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-hire-manager',
  templateUrl: './hire-manager.component.html',
  styleUrls: ['./hire-manager.component.css']
})
export class HireManagerComponent implements OnInit {
  userId:string;
  constructor(private ComServ: CompanyService, private hiMangerServ:HireMangerService,private activatedRoute: ActivatedRoute,private router:Router) { }

  HireMang: HireManger;
  Companies: Compay[] = [];
    ngOnInit() {
      this.ResetForm();
      this.ComServ.GetAllCompany().subscribe((data) => {this.Companies = data });
      const ID = this.activatedRoute.snapshot.params['UserId'];
      this.userId = ID;
    }
    ResetForm(form?:NgForm)
    {
      if(form != null)
      form.reset();
      this.HireMang={
        location:"",
        UserObjID:"",
        companyObjID:null
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

    onSubmit(form: NgForm)
    {
      form.value.UserObjID =this.userId;
      console.log(form.value);
       this.hiMangerServ.postHireMnager(form.value).subscribe((data)=>{console.log("congratulation");
       this.router.navigate(['/home/AddJob']);
      });

    }


}
