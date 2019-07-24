import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillOfJob } from './skill-of-job';
@Injectable({
  providedIn: 'root'
})
export class SkillJobService {
  readonly RoutUrl ="http://localhost:51835/";
  constructor(private  _http : HttpClient) { }

  GetOtherSkillOfJobId(id: number)
  {
    return this._http.get<SkillOfJob[]>(this.RoutUrl + 'GetSkillOfJob/' + id);
  }
}
