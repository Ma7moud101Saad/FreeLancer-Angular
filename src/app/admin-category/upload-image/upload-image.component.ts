import { Component, OnInit } from '@angular/core';
import { UploadImageService } from 'src/app/shared/upload-image.service';
import { Catogies } from 'src/app/shared/catogies';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CatogiesService } from 'src/app/shared/catogies.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  imageUrl: string = "../../assets/FormsStyles/images/index.jpg";
  fileToUpload: File = null;
  cat: Catogies = new Catogies();
  constructor(
    private imageService: UploadImageService,
    private CatogiesService: CatogiesService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  handleFileUpload(file: FileList) {
    this.fileToUpload = file.item(0);

    // Show Image Preview
    var render = new FileReader();
    render.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    render.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Caption, Image) {
    this.imageService.postFile(this.fileToUpload).subscribe(data => {
      this.cat.CatName = Caption.value;
      this.cat.ImageName = this.fileToUpload.name;
      this.CatogiesService.insertCatogies(this.cat).subscribe(data => {
        console.log("Image Uploaded Successfuly");
        this.toastr.success("تم اضافه القسم بنجاح !");

        Caption.value = null;
        Image.value = null;
        this.imageUrl = "../../assets/index.jpg";
        this.router.navigate(["/adminPanel/AdminCategory"]);
      });
    });
  }
}
