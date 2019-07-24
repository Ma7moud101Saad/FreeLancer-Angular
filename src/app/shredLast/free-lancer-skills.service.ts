import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FreeLancerSkills } from './free-lancer-skills.=';

@Injectable({
  providedIn: 'root'
})
export class FreeLancerSkillsService {
  readonly RoutUrl ="http://localhost:51835/";
  constructor(private _http: HttpClient) { }
  postFreeLancerSkills(formData: FreeLancerSkills)
  {
    return this._http.post(this.RoutUrl + 'AddSkills', formData);
  }
}
