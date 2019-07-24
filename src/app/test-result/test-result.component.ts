import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.css']
})
export class TestResultComponent implements OnInit {
  constructor() { }
TotalGrade:any;
  ngOnInit() {
    var TotalG = localStorage.getItem("totalGrader");
    this.TotalGrade = TotalG;
  }

}
