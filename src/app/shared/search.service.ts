import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jobclass } from '../job/jobclass';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  readonly RoutUrl ="http://localhost:51835/";
  constructor(private  _http : HttpClient) { }
  search(Name: string)
  {
    return this._http.get<Jobclass[]>(this.RoutUrl + 'GetJobWithName/' + Name);
  }
}
