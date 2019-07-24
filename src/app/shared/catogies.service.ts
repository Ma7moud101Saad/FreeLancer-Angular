import { Catogies } from './catogies';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CatogiesService {
  //readonly routeUrl= "http://localhost:24886/api";
  constructor( private  _http:HttpClient) {
 }

 getallcat(){
   return this._http.get<Catogies[]>('http://localhost:51835/api/Categories');
 }

 //-------------------------Ramey start--------------------------------------
 getAllCategories(): Observable<Catogies[]> {
  return this._http.get<Catogies[]>(
    `${environment.API_URL}api/categories`
  );
}

getCatogiesById(id: number): Observable<Catogies> {
  return this._http.get<Catogies>(
    `${environment.API_URL}api/Categories/${id}`
  );
}

deleteCatogies(id: number): Observable<Catogies> {
  return this._http.delete<Catogies>(
    `${environment.API_URL}api/categories/${id}`
  );
}

updateCatogies(id: number, Catogies: Catogies): Observable<Catogies> {
  const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: ' */*'
    // ,'Authorization': 'my-auth-token'
      })};
  return this._http.put<Catogies>(
    `${environment.API_URL}api/Categories/${id}`, Catogies, httpOptions);
}
insertCatogies(Catogies: Catogies): Observable<Catogies> {
  const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: ' */*'
    // ,'Authorization': 'my-auth-token'
      })};
  return this._http.post<Catogies>(
    `${environment.API_URL}api/categories/`, Catogies, httpOptions);
}


//--------------------------end of Ramey-------------------------------------
}
