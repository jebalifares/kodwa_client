import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
  

  constructor(private _http: HttpClient) { }
  public exercices(){
    return this._http.get(`${environment.baseUrl}/quiz/`);
  }

  //get exercice by id
  public getExerciceById(qid:number){
    return this._http.get(`${environment.baseUrl}/quiz/${qid}`)

  }
  // add exercice
  public addQuiz(quiz){
    return this._http.post(`${environment.baseUrl}/quiz/`,quiz);
  }
  // get quizz by category
  public QuizByCategory (cid){
    return this._http.get(`${environment.baseUrl}/quiz/category/${cid}`)

  }

}
