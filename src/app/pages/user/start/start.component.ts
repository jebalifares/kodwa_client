import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  
  note:number[]=[1,2,3,4,5];
  step1Answer:number=0; 
  step2Answer:number=0;
  step3Answer:number=0;
  qid;
  questions:any;
  marksGot=0;
  correctAnswers=0;
  attempted=0;
timer:any 

  constructor(private _route:ActivatedRoute, private question:QuestionService) { }

  ngOnInit(): void {
    this.qid=this._route.snapshot.params.qid;
    this.loadQuestion();
  }

  loadQuestion(){
    this.question.getQuestionOfExercice(this.qid).subscribe((data:any)=>{
      console.log(data);
    this.questions=data;
    this.timer=this.questions.length *2 *60;
    this.questions.forEach((q) => {
     q['givenAnswer'] ='';
     console.log(q.givenAnswer)
    });
    },(error)=>{
      Swal.fire("error","error in loading data","error")
    })
this.startTimer();
    

  }

  submitQuiz(){

  }
startTimer(){
  let t=window.setInterval(()=>{
    if(this.timer<=0)
    {
      this.submitQuiz()
      clearInterval(t);
    }else{
      this.timer--;
    }

  },1000)
      
    }

getTime(){
  let mm=Math.floor(this.timer/60);
  let ss=this.timer-mm *60;
  return `${mm} min:${ss} sec `;
}    
}
