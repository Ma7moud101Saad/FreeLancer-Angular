import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Share/user.=';
import { UserService } from 'src/app/Share/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User;
  roles: any[];

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.userService.getAllRoles().subscribe(
      (data: any) => {
        data.forEach(obj => obj.selected = false);
        this.roles = data;
      }
    );
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    if (this.roles) {
    this.roles.map(x => x.selected = false);
    }
    this.user = {
      PhoneNumber: '',
      ConfirmPassword: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: '',
      Roles: [],
    };
  }

  OnSubmit(form: NgForm) {
// tslint:disable-next-line: no-shadowed-variable
    // const x = this.roles.filter( x => x.selected).map(y => y.Name);
    const x = ['User'];

    this.userService.registerUser(form.value, x)
      .subscribe(data => { this.toastr.success('User registration successful'); },
        // err => console.log(err)
        err => { this.toastr.error('invalid process'); }
      );
    // .subscribe((data: any) => {
    //   if (data.Succeeded == true) {
    //     this.resetForm(form);
    //     this.toastr.success('User registration successful');
    //   }
    //   else
    //     this.toastr.error(data.Errors[0]);
    // });
  }
  updateSelectedRoles(index) {
    this.roles[index].selected = !this.roles[index].selected;
  }

}
