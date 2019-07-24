import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobSkills } from './job-skills.=';

@Injectable({
  providedIn: 'root'
})
export class JobSkillsService {

  readonly RoutUrl ="http://localhost:51835/";
  constructor(private _http: HttpClient) { }
  postJobSkills(formData: JobSkills)
  {
    return this._http.post(this.RoutUrl + 'AddJobSkills', formData);
  }
}
