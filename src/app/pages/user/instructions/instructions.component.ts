import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciceService } from './../../../services/exercice.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
qid;
quiz;
  constructor(private _route:ActivatedRoute,private _quiz:ExerciceService
    , private _rout:Router) { }

  ngOnInit(): void {
    this.qid=this._route.snapshot.params.qid;
    this._quiz.getExerciceById(this.qid).subscribe((data)=>{
this.quiz=data;
    })
  }

startQuiz(){
  Swal.fire({
    title: 'Do you want to Start The quiz?',
    
    showCancelButton: true,
    confirmButtonText: 'Start',
    denyButtonText: `Deny`,
    icon:'info'
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this._rout.navigate(['user-dashboard/start/' + this.qid]);
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })

}  

}
