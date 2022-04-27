import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { QuestionService } from 'src/app/services/question.service';
import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  qId:any
  qTitle;
  question={
    quiz:{},
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  };
  public Editor = ClassicEditor;


  constructor(private _route:ActivatedRoute, private _quiz:QuestionService) { }

  ngOnInit(): void {
    this.qId=this._route.snapshot.params.qid;
    this.qTitle=this._route.snapshot.params.title;
    this.question.quiz['qId']=this.qId;
  }
  formSubmit(){
    this._quiz.addQuestion(this.question).subscribe((data:any)=>{
Swal.fire("success","Question added succefuly","success");
    })

  }
}
