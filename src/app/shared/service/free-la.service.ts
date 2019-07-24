import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FreeLanceDto } from '../model/free-lance-dto.model';

@Injectable({
  providedIn: 'root'
})
export class FreeLaService {

  readonly RoutUrl ="http://localhost:51835/";
  constructor(private _http: HttpClient) { }

  postFreeLancer(formData: FreeLanceDto)
  {
    return this._http.post(this.RoutUrl + 'PostFreeLancer', formData);
  }

  //get freeLancerID by UserId

  GetFreeLancerIdByUserId(id: string) {
    return this._http.get<number>(this.RoutUrl + 'getFreeID/' + id);
  }
}
