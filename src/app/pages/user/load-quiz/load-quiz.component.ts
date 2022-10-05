import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciceService } from 'src/app/services/exercice.service';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
  quizess:any=[{
    qId:'',
    title:'Spring boot ',
    description:'this is test for basic knowledge of Spring boot',
    maxMarks:'20',
    numberOfQuestions:'4',
    active:'',
    category:{
      title:''
    }
  
  
  },{
    qId:'',
    title:'Angular ',
    description:'this is test for basic knowledge of Angular',
    maxMarks:'20',
    numberOfQuestions:'4',
    active:'',
    category:{
      title:''
    }
  
  
  }];
  catId;
  constructor(private _route:ActivatedRoute, private _quiz:ExerciceService) { }

  ngOnInit(): void {
    this._route.params.subscribe((params)=>{
      this.catId=this._route.snapshot.params.catId;
    })
    
  
  
    this._quiz.exercices().subscribe((data)=>{
this.quizess=data;
    },(error)=>{
      Swal.fire("error","error in loading data","error")
    });
  
  
    this._quiz.QuizByCategory(this.catId).subscribe((data)=>{
      this.quizess=data;
    })

  

  }}
