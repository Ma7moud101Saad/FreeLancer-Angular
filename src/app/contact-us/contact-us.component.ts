import { Component, OnInit } from '@angular/core';
import { ContactUs } from '../shredLast/contact-us.model';
import { ContactUsService } from '../shredLast/contact-us.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  newContactUs: ContactUs;
  constructor(
    private _contactUsService: ContactUsService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}
  submit(f: NgForm) {
    this._contactUsService.postContactUs(f.value).subscribe(
      data => {
        this.newContactUs = data;
        this.toastr.success("تم الارسال بنجاح !");
      },
      err => {
        console.error(err);
      }
    );
    // console.log(f.value);
  }

}
