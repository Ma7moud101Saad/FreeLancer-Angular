import { Injectable } from '@angular/core';
import { User } from './user.=';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserEmail } from './user-email.=';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // =============================(register)============================
  formData: User;
  constructor(private http: HttpClient) { }

  registerUser(user: User, roles: string[]) {
    const body: User = {
      PhoneNumber: user.PhoneNumber,
      ConfirmPassword: user.ConfirmPassword,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Roles: roles

    };
    const routeUrl = `${environment.API_URL}api/Account/Register`;

    return this.http.post(routeUrl, body);
  }
  // =================================(login)================================
  userAuthentication(Name, Password) {
    const routeUrl = `${environment.API_URL}token`;
    // tslint:disable-next-line: prefer-const
    let data = 'UserName=' + Name + '&Password=' + Password + '&grant_type=password';
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(routeUrl, data, { headers: reqHeader });
  }
  // =================================(get User Claims)================================

  getUserClaims() {
    const routeUrl = `${environment.API_URL}/api/Account/UserInfo`;
    var userToken = localStorage.getItem('userToken');
    const httpOptions = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + userToken)};
    return  this.http.get(routeUrl, httpOptions);
    }
    // =================================(get All Roles)================================

    getAllRoles() {
      const routeUrl = `${environment.API_URL}/api/GetAllRoles`;
      const reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
      return this.http.get(routeUrl, { headers: reqHeader });
    }

    // GetUserId(email:string) {
    //   const routeUrl = `${environment.API_URL}getUser/`;
    //   return this.http.get<string>(routeUrl+ email);
    // }
    PostUser(formData:UserEmail )
    {
      return this.http.post('http://localhost:51835/postUser', formData);
    }

    roleMatch(allowedRoles): boolean {
      let isMatch = false;
      const userRoles: string[] = JSON.parse(localStorage.getItem('userRoles'));
      allowedRoles.forEach(element => {
        if (userRoles.indexOf(element) > -1) {
          isMatch = true;
          return false;
        }
      });
      return isMatch;

    }
}
