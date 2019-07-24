import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from '../model/test.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  readonly RoutUrl ="http://localhost:51835/";
  constructor(private _http: HttpClient) { }
  PostTest(formData:Test )
  {
    return this._http.post(this.RoutUrl + 'AddTest', formData);
  }
  GetAllTests()
  {
    return this._http.get<Test[]>(this.RoutUrl+'api/tests');
  }

  GetTestById(id: number) {
    return this._http.get<Test>(this.RoutUrl + 'GetTestById/' + id);
  }
}
