import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../shared/header.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FreeLaService } from '../shared/service/free-la.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//global variable
userAccount: string;
flagFreeLancer: boolean;
flagHireManger: boolean;
flagCompany: boolean;
  constructor(private HeadSer: HeaderService,private router:Router,private toastr: ToastrService) { }

  ngOnInit() {
  }


  goToFreeLancerForm() {
    //localStorage Has UserAccountID
    this.userAccount  =localStorage.getItem("UserId");
     console.log(this.userAccount);
     this.HeadSer.CheckIfFreeLancerExist(this.userAccount).subscribe((data)=>{this.flagFreeLancer = data;
      console.log(this.flagFreeLancer);
      if(this.flagFreeLancer == true)
      {
        //GetJob open porposal
        this.router.navigate(['/home']);
        console.log("show التحق");



      }
      else if(this.flagFreeLancer == false)

      {

        //go to AddFreeLancerForm
        this.router.navigate(['/home/FreeLancerPage', this.userAccount ]);
      }
    });
 }


 goToHireManagerForm() {
  //localStorage Has UserAccountID
  this.userAccount = localStorage.getItem("UserId");
   console.log(this.userAccount);
   this.HeadSer.CheckIfHireMangerExist(this.userAccount).subscribe((data)=>{this.flagHireManger = data;
    console.log(this.flagHireManger);
    if(this.flagHireManger == true)
    {
      //GetJob open porposal
      console.log("go to add Job");
      this.router.navigate(['/home']);
    }
    else if(this.flagHireManger == false)
    {

      //go to AddFreeLancerForm
      this.router.navigate(['/home/HireMangerPage', this.userAccount ]);
    }
  });
}


goToCompanyForm() {
  //localStorage Has UserAccountID
  this.userAccount = localStorage.getItem("UserId");
   console.log(this.userAccount);
   this.HeadSer.CheckIfCompanyExist(this.userAccount).subscribe((data)=>{this.flagCompany = data;
    console.log(this.flagCompany );
    if(this.flagCompany  == true)
    {
      //GetJob open porposal
      console.log("أنت مسجل كشركة بلفعل");

      this.toastr.show('أنت مسجل كشركة بلفعل');

    }
    else if(this.flagCompany  == false)
    {

      //go to AddFreeLancerForm
      this.router.navigate(['/home/company', this.userAccount ]);
    }
  });
}




}
