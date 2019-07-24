import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compay } from '../model/compay.=';
import { CompayDto } from '../model/compay-dto.=model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {


  readonly RoutUrl ="http://localhost:51835/";
  constructor(private _http: HttpClient) { }

  postCompany(formData: CompayDto)
  {
    return this._http.post(this.RoutUrl + 'PostCompany', formData);
  }

  GetAllCompany()
  {
    return this._http.get<Compay[]>(this.RoutUrl + 'api/companies');
  }
}
