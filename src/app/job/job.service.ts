import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jobclass } from './jobclass';
import { Job } from '../shared/job.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private _http:HttpClient) { }



  getalljob( id :number){
    return this._http.get<Jobclass[]>('http://localhost:51835/JobsWithCatId/'+id);

  }

  getJobById(id:number)
  {
    return this._http.get<Jobclass>('http://localhost:51835/GetJob/'+id);
  }

  //-----------------------Ramey start----------------------------------
  postJob(newJob: Job): Observable<Job> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: " */*"
        // ,'Authorization': 'my-auth-token'
      })
    };
    return this._http.post<Job>(
      `${environment.API_URL}postJob`,
      newJob,
      httpOptions
    );
  }

  //----------------------Ramey End-------------------------------------
}

