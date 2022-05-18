import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) {}
    //load all category
     public categories (){
      return this._http.get(`${environment.baseUrl}/category/`);
    }
    public addcategory(category:any){
      return this._http.post(`${environment.baseUrl}/category/`,category)
    }
    //add reference 
    public addReference(reference:any){
      return this._http.post(`${environment.baseUrl}/reference/`,reference)

    }
   }
  

