import { Component, OnInit } from '@angular/core';
import { ContentHeaderService } from '../shared/content-header.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSubmit(search:any)
  {
    console.log(search.value);
    this.router.navigate(['/home/search', search.value ]);


  }
}
