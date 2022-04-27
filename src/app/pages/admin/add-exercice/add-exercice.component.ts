import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { CategoryService } from 'src/app/services/category.service';
import  Swal  from 'sweetalert2';
import { ExerciceService } from 'src/app/services/exercice.service';


@Component({
  selector: 'app-add-exercice',
  templateUrl: './add-exercice.component.html',
  styleUrls: ['./add-exercice.component.css']
})
export class AddExerciceComponent implements OnInit {
  color: ThemePalette ='accent';
  checked = false;
  categories=[{
    cid:'',
    title:''
  },
  {
    cid:'',
    title:''
  }]

  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    category:{
      cid:''
    }
  }

  constructor(private _cat:CategoryService, private _quiz:ExerciceService) { }

  ngOnInit(): void {
    this._cat.categories().subscribe((data:any)=>{
      this.categories=data;
    },(error)=>{
      Swal.fire('Error!!','error in loading data','error')



    });

    
  }
addQuiz(){
  this._quiz.addQuiz(this.quizData).subscribe((data)=>{

    Swal.fire("success","Operation success","success");
    this.quizData={
      title:'',
      description:'',
      maxMarks:'',
      numberOfQuestions:'',
      active:true,
      category:{
        cid:''
      },
    };
  },
    
  (error)=>{
    Swal.fire('Error!!','error in loading data','error');
  });


}
}
