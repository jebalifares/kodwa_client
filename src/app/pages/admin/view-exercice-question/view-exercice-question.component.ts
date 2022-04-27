import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal  from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-exercice-question',
  templateUrl: './view-exercice-question.component.html',
  styleUrls: ['./view-exercice-question.component.css']
})
export class ViewExerciceQuestionComponent implements OnInit {
qId:any;
title:any;
questions:any =[];
  constructor(private _route:ActivatedRoute,private _question:QuestionService,
    private _snack:MatSnackBar

) {

 }

  ngOnInit(): void {
    this.qId=this._route.snapshot.params.qid;
    this.title=this._route.snapshot.params.title;

    this._question.getQuestionOfExercice(this.qId).subscribe((data:any)=>{
    this.questions=data;
    },(error)=>{
      Swal.fire('error','error in loading data','error')
    })
    



  }
  deleteQuestion(qId){
    Swal.fire({
      icon:'info',
      showCancelButton:true,
       confirmButtonText:'Delete',
       title:'Are you sure, want to delete this question?'

  }).then((result)=>{
    if(result.isConfirmed)
    {
      //if confirm
      this._question.deleteQuestion(qId).subscribe((data)=>{
        this._snack.open('Question Deleted','',{
          duration:3000,
        })
      },(error)=>{
        this._snack.open('Error in deleting questions','',{
          duration:3000,
        })
      })
    }

  });

}
}
