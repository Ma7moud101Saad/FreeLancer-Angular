import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DtouserAnswer } from '../model/dtouser-answer.=model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  readonly RoutUrl ="http://localhost:51835/";
  constructor(private _http: HttpClient) { }

  postDtoUserAnswer(formData: DtouserAnswer )
  {
    return this._http.post(this.RoutUrl + 'PostUserAnswer', formData);
  }
}
