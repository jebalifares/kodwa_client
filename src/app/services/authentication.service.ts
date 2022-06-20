import { environment } from './../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 

  public loginSubject=new Subject<boolean>();
  constructor(private _http:HttpClient) { }
// generate token 
  public generateToken(logindata:any){
    return this._http.post(`${environment.baseUrl}/authenticate`,logindata);
  }
// get token
  public loginUser(jwtToken:string){
    localStorage.setItem('token',jwtToken);
    return true;
  }
//user is login or not
 

  public getCurrentUser(){
    return this._http.get(`${environment.baseUrl}/current-user`);
  }
//logout: remove token from local storage
  
// get token
  

  

  
 

  

  
public SetUser(user){
  return localStorage.setItem('user',JSON.stringify(user));
}
 public getUser(){
  JSON.parse(localStorage.getItem('user'));
 }

  
  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles():[]  {
    return JSON.parse(localStorage.getItem('roles'));
  }
  public setRoleName(roleName:String|any){
   return localStorage.setItem('roleName',roleName);
  }
  public getRoleName(){
    return localStorage.getItem('roleName');
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }

}
