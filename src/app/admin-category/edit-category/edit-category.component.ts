import { Component, OnInit } from '@angular/core';
import { Catogies } from 'src/app/shared/catogies';
import { CatogiesService } from 'src/app/shared/catogies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadImageService } from 'src/app/shared/upload-image.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  [x: string]: any;
  imageUrl: string = "../../assets/Image/imagelogin.jpg";
  fileToUpload: File = null;
  selectedCategory = new Catogies();
  updateCategory: Catogies;

  value: string;

  //   = "http: //localhost:51835/Content/Image/" + this.selectedCategory.ImageName;
  constructor(
    private categoryService: CatogiesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private imageService: UploadImageService
  ) {
    activatedRoute.queryParams.subscribe(params => {
      this.selectedCategory.ID = params["ID"];
      this.selectedCategory.CatName = params["CatName"];
      this.selectedCategory.ImageName = params["ImageName"];
    });
  }

  ngOnInit() {
    const selectedId = this.activatedRoute.snapshot.params["id"];
    this.categoryService.getCatogiesById(selectedId).subscribe(data => {
      this.selectedCategory = data;
    });
  }

  handleFileUpload(file: FileList) {
    this.fileToUpload = file.item(0);
    this.selectedCategory.ImageName = this.fileToUpload.name;
    // Show Image Preview
    const render = new FileReader();
    render.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    render.readAsDataURL(this.fileToUpload);
  }

  resetForm(imageForm: NgForm) {
    if (imageForm != null) {
      imageForm.reset();
    } else {
      this.selectedCategory = null;
    }
  }

  OnSubmit(imageForm: NgForm) {
    if (this.fileToUpload == null) {
      this.updateCategory = new Catogies();
      this.updateCategory.CatName = imageForm.value.Caption;
      this.updateCategory.ImageName = this.selectedCategory.ImageName;
      this.updateCategory.ID = this.selectedCategory.ID;
      this.categoryService
        .updateCatogies(this.selectedCategory.ID, this.updateCategory)
        .subscribe((data: any) => {
          if (data != null || data === "Success") {
            // this.toastr.success("Category edit successfully");
            console.log(imageForm.value);
            console.log(Image.name);
            this.resetForm(imageForm);

            this.router.navigate(["/adminPanel"]);
          }
        });
    } else {
      this.imageService.postFile(this.fileToUpload).subscribe(data => {
        this.updateCategory = new Catogies();
        this.updateCategory.CatName = imageForm.value.Caption;
        this.updateCategory.ImageName = this.fileToUpload.name;
        this.updateCategory.ID = this.selectedCategory.ID;
        this.categoryService
          .updateCatogies(this.selectedCategory.ID, this.updateCategory)
          .subscribe((data: any) => {
            if (data != null || data === "Success") {
              // this.toastr.success("Category edit successfully");
              console.log(imageForm.value);
              console.log(Image.name);
              this.resetForm(imageForm);
              this.router.navigate(["/allcategory"]);
            }
          });
      });
    }
  }

}
