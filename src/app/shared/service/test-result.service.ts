import { Injectable } from '@angular/core';
import { TestResult } from '../model/test-result.=';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestResultService {

  readonly RoutUrl ="http://localhost:51835/";
  constructor(private _http: HttpClient) { }

  postTestResult(formData: TestResult)
  {
    return this._http.post(this.RoutUrl + 'AddTestResult', formData);
  }
}
