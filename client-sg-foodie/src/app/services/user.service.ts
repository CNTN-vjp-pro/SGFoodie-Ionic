import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user_API = "http://localhost:3000/users/"

  constructor(private _http: HttpClient) { }

  register(user: any){
    return this._http.post(`${this.user_API}register`,user)
  }

}
