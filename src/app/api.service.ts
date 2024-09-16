import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://192.168.29.223:8080/api"
  private AppId: any;
  headers: any;


  Token() {
    const token = localStorage.getItem('Token');
    const UID: any = localStorage.getItem('userId');
    const ROLE: any = localStorage.getItem('role');
    if (ROLE == 'admin') {
      this.AppId = 2;
    } else {
      this.AppId = 1;
    }

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'userId': UID,
      'Role': ROLE,
      'APP-ID': this.AppId
    });
  }

  CreateNew(data: any) {
    return this.http.post(this.baseUrl + '/user/create', data);
  }

  GenerateName(data:any){
    return this.http.post(this.baseUrl + '/user/generateName', data);
  }

  Login(data:any){
    return this.http.post(this.baseUrl + '/user/login', data);
  }

  ValidateOtp(data:any){
    return this.http.post(this.baseUrl + '/user/validateOtp', data);
  }


}
