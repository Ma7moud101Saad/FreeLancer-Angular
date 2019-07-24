import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../shared/search.service';
import { Jobclass } from '../job/jobclass';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  job:Jobclass[]=[];
  constructor(private route:ActivatedRoute,private searchServ:SearchService,private router:Router) { }
JobName:string;
  ngOnInit() {
    const Name = this.route.snapshot.params['Name'];
    this.JobName = Name;
    this.searchServ.search(this.JobName ).subscribe((data)=>{this.job = data})
  }
  GOtoPorposal(Jobid:number)
{

  this.router.navigate(['/Porposal', Jobid ]);
}


}
