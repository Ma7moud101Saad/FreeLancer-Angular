import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HireManger } from '../model/hire-manger.model';

@Injectable({
  providedIn: 'root'
})
export class HireMangerService {

  readonly RoutUrl ="http://localhost:51835/";
  constructor(private _http: HttpClient) { }

  postHireMnager(formData: HireManger)
  {
    return this._http.post(this.RoutUrl + 'postHireManger', formData);
  }

  //get HireManagerId by UserId

  GetHireMangerIdByUserId(id: string) {
    return this._http.get<number>(this.RoutUrl + 'getHireId/' + id);
  }
}
