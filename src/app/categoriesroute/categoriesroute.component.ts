import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoriesroute',
  templateUrl: './categoriesroute.component.html',
  styleUrls: ['./categoriesroute.component.css']
})
export class CategoriesrouteComponent implements OnInit {

  constructor(private route:ActivatedRoute,
             ) { }
catId:number;
  ngOnInit() {

    this.catId = this.route.snapshot.params['id'];
console.log(this.catId)
    // this.route.paramMap.subscribe(param=>{
    //   console.log(param)
    // });

   
  }

  
  

}
