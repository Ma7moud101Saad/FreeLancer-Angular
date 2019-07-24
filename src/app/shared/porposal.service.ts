import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PorposalDto } from './porposal-dto';
@Injectable({
  providedIn: 'root'
})
export class PorposalService {
  readonly RoutUrl ="http://localhost:51835/";
  constructor(private _http: HttpClient) { }
  postPorposal(formData: PorposalDto)
  {
    return this._http.post(this.RoutUrl + 'AddPorposal', formData);
  }
}
