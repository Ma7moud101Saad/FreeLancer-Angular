import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Share/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(protected userServ: UserService, private route: Router) { }
  isLoginError = false;
    ngOnInit() {
      this.resertForm();
    }
    resertForm(from?: NgForm) {
      if (from != null) {
      from.resetForm();
      }

      this.userServ.formData = {
         Email: '',
         Password: '',
         ConfirmPassword: '',
         FirstName: '',
         LastName: '',
         PhoneNumber: '',
         Roles: []
   };

    }

    onSubmit(form: NgForm) {
      this.userServ.userAuthentication(form.value.Email, form.value.Password).subscribe((data: any) => {
        localStorage.setItem('userToken', data.access_token);
        localStorage.setItem('userRoles', data.role);

        this.route.navigate(['/home']);
        console.log(data.access_token);

      },
      err => {console.log(err);
      // (err: HttpErrorResponse) => {
      //     this.isLoginError = true;
      });

    }
    goRegister() {
      this.route.navigate(['/signup'] );
    }

}
