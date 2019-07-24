import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PoprposalWithUserNameDto } from './poprposal-with-user-name-dto.model';
@Injectable({
  providedIn: 'root'
})
export class PorposalWithNameDtoService {

  constructor(private _http: HttpClient) { }
  getallPorposal(JobId: number){
    return this._http.get<PoprposalWithUserNameDto[]>('http://localhost:51835/GetPorposal/'+ JobId);
  }
}
