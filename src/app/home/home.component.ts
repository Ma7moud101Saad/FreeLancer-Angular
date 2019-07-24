import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Share/user.service';
import { UserEmail } from '../Share/user-email.=';
import { HeaderService } from '../shared/header.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userClaims: any;
  userAccount: string;
  flagFreeLancer: boolean;
  flagHireManger: boolean;
  flagCompany: boolean;
  constructor(private router: Router, protected userService: UserService,
    private HeadSer: HeaderService,private toastr: ToastrService) { }
email:UserEmail = new UserEmail();
  ngOnInit() {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;

      this.email.Email = this.userClaims.Email;
      console.log(this.email);
      this.userService.PostUser(this.email).subscribe((data)=>{console.log(data);
        localStorage.setItem("UserId", data.toString());
        //localStorage.getItem("UserId");
      });

    });
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
    localStorage.setItem("UserId", "");

  }
// ------------------------------------------------------------
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

 goToTest() {
  //localStorage Has UserAccountID
  this.userAccount  =localStorage.getItem("UserId");
   console.log(this.userAccount);
   this.HeadSer.CheckIfFreeLancerExist(this.userAccount).subscribe((data)=>{this.flagFreeLancer = data;
    console.log(this.flagFreeLancer);
    if(this.flagFreeLancer == true)
    {
      //GetJob open porposal
      this.router.navigate(['/home/Profile']);



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
      this.router.navigate(['/home/AddJob']);
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
