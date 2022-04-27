import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciceService } from 'src/app/services/exercice.service';

@Component({
  selector: 'app-update-exercice',
  templateUrl: './update-exercice.component.html',
  styleUrls: ['./update-exercice.component.css']
})
export class UpdateExerciceComponent implements OnInit {
  qid=0;
  exercice={
    qid:1,
    title:'Basic Java',
    description:'This a java basic exercice',
    maxMarks:50,
    numberOfQuestion:20,
    active:'',
    category:[{
      title:'Programming'
    }]
  }
  ;

  constructor(private _route:ActivatedRoute, private _exercice:ExerciceService) { }

  ngOnInit(): void {
    this.qid=this._route.snapshot.params.qid;
    this._exercice.getExerciceById(this.qid).subscribe((data:any)=>{
    this.exercice=data;
    })
  }

}
