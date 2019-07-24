import { Jobclass } from './jobclass';
import { JobService } from './job.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { HeaderService } from '../shared/header.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor(private jobserv:JobService ,private route:ActivatedRoute,private router:Router,private HeadSer: HeaderService) { }
  job:Jobclass[];
  catId:number;
  userAccount: string;
  flagFreeLancer: boolean;
  @Input('data') meals: string[] = [];

    public filter: string = '';
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public responsive: boolean = false;
    public config: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 10,
        currentPage: 1
    };
    public labels: any = {
        previousLabel: 'Previous',
        nextLabel: 'Next',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page',
        screenReaderCurrentLabel: `You're on page`
    };

    private popped = [];

    onPageChange(number: number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    }

    pushItem() {
        let item = this.popped.pop() || 'A newly-created meal!';
        this.meals.push(item);
    }

    popItem() {
        this.popped.push(this.meals.pop());
    }

  ngOnInit() {

    this.catId = this.route.snapshot.params['id'];

    this.jobserv.getalljob(this.catId).subscribe((data)=>{
      this.job=data;
      console.log(data);

    })
}

GOtoPorposal(Jobid:number)
{

  //localStorage Has UserAccountID
  this.userAccount  =localStorage.getItem("UserId");
   console.log(this.userAccount);
   this.HeadSer.CheckIfFreeLancerExist(this.userAccount).subscribe((data)=>{this.flagFreeLancer = data;
    console.log(this.flagFreeLancer);
    if(this.flagFreeLancer == true)
    {
      //GetJob open porposal

      this.router.navigate(['/home/Porposal', Jobid ]);

    }
    else if(this.flagFreeLancer == false)
    {

      //go to AddFreeLancerForm
      this.router.navigate(['/home/FreeLancerPage', this.userAccount ]);
    }
  });



}



}
