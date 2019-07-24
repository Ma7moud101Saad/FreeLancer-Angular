import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questions } from '../model/questions.=model';
import { AddQuestionToTest } from '../model/add-question-to-test.=';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  readonly RoutUrl ="http://localhost:51835/";
  constructor(private  _http : HttpClient) { }
  PostQuestion(formData:AddQuestionToTest )
  {
    return this._http.post(this.RoutUrl + 'AddQuestionToTest', formData);
  }
//-------------get All Questions of ID------------------
  GetAllQuestionOfTestId(id: number)
  {
    return this._http.get<Questions[]>(this.RoutUrl + 'api/Questions/' + id);
  }
}
