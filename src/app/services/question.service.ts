import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }
  public  getQuestionOfExercice(qid:number){
    return this._http.get(`${environment.baseUrl}/question/quiz/${qid}`);
  }
  // add question 
  public addQuestion(question){
    return this._http.post(`${environment.baseUrl}/question/`,question);

  }
  //delete question 
  public deleteQuestion(qid){
    return this._http.delete(`${environment.baseUrl}/question/${qid}`);
  }
  
}
