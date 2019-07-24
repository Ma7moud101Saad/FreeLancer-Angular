import { Component, OnInit } from '@angular/core';
import { Catogies } from 'src/app/shared/catogies';
import { CatogiesService } from 'src/app/shared/catogies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-from-api',
  templateUrl: './category-from-api.component.html',
  styleUrls: ['./category-from-api.component.css']
})
export class CategoryFromApiComponent implements OnInit {
  categoryList: Catogies[];
  deleteCat: Catogies;
  p: number = 1;

  constructor(
    private categoryService: CatogiesService,
    private router: Router
  ) {}
  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(
      data => {
        this.categoryList = data;
      },
      err => {
        console.error(err);
      }
    );
  }

  Delete(id: number) {
    this.categoryService.deleteCatogies(id).subscribe(
      data => {
        this.deleteCat = data;
        this.ngOnInit();
        console.log(data);
        console.log("obj Deleted");
      },
      err => {
        console.error(err);
      }
    );
  }
}
