import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CatogiesService } from '../shared/catogies.service';
import { Catogies } from '../shared/catogies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catogies',
  templateUrl: './catogies.component.html',
  styleUrls: ['./catogies.component.css']
})
export class CatogiesComponent implements OnInit {
userId :string;
  constructor(private catServ:CatogiesService,
    private rotr: Router) { }
  catogries:Catogies[];
  ngOnInit() {
   this.userId =localStorage.getItem("UserId");
    this.catServ.getallcat().subscribe((data)=>{
 this.catogries=data;

    })

  }
  routId(id: number) {
    this.rotr.navigate(['/home/job',id]);

  }


}
