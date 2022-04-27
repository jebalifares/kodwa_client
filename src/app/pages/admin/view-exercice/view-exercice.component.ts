import { Component, OnInit } from '@angular/core';
import { ExerciceService } from './../../../services/exercice.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-view-exercice',
  templateUrl: './view-exercice.component.html',
  styleUrls: ['./view-exercice.component.css']
})
export class ViewExerciceComponent implements OnInit {

  exercices=[{
    qId:'',
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:'',
    category:{
      title:''
    }
  
  
  }]

  constructor(private _exercice:ExerciceService) { }

  ngOnInit(): void {
    this._exercice.exercices().subscribe((data:any)=>{
    this.exercices=data;
    console.log(data);
    },
    (error)=>{
      Swal.fire("error",'error in loading data','error')
    })
  }

}
