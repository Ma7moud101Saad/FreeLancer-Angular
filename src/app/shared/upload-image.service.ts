import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private httpClient: HttpClient) {}

  postFile(fileToUpload: File) {
    const endPoint = "http://localhost:51835/api/ImageUpload";
    const formData: FormData = new FormData();
    formData.append("Image", fileToUpload, fileToUpload.name);
    // formData.append("ImageCaption", caption);
    return this.httpClient.post(endPoint, formData);
  }
}
