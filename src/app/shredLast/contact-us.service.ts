import { Injectable } from '@angular/core';
import { ContactUs } from './contact-us.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  constructor(private _httpClient: HttpClient) {}

  postContactUs(newContact: ContactUs): Observable<ContactUs> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: " */*"
        // ,'Authorization': 'my-auth-token'
      })
    };

    return this._httpClient.post<ContactUs>(
      `${environment.API_URL}api/contactUs`,
      newContact,
      httpOptions
    );
  }
}
