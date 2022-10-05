import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimateurService {
  

  constructor(private _http: HttpClient) { }
  public sessions(){
    return this._http.get(`${environment.baseUrl}/session/`);
  }
  public deleteSessionById(id:number){
    return this._http.delete(`${environment.baseUrl}/session/${id}`)


  }

  //get session by id
  public getSessionById(qid:number){
    return this._http.get(`${environment.baseUrl}/session/${qid}`)

  }
  // add session
  public CreateSession(session:any){
    return this._http.post(`${environment.baseUrl}/session/`,session);
  }
  //create candidat
  public addCandidat(candidat:any){
    return this._http.post(`${environment.baseUrl}/session/candidat`,candidat);


  }
  // add candidat to session
  addCandidatToSession(id: Number, candidat: any){
    return this._http.post(`${environment.baseUrl}/session/${id}`, candidat );
  }
  

}
