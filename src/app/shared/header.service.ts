import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  readonly RoutUrl ="http://localhost:51835/";
  constructor(private  _http : HttpClient) { }
  CheckIfFreeLancerExist(id: string)
  {
    return this._http.get<boolean>(this.RoutUrl + 'getFree/' + id);
  }

  CheckIfHireMangerExist(id: string)
  {
    return this._http.get<boolean>(this.RoutUrl + 'getHire/' + id);
  }

  CheckIfCompanyExist(id: string)
  {
    return this._http.get<boolean>(this.RoutUrl + 'getCompany/' + id);
  }

}
