import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myImg:String ="C:/Users/feres/Desktop/ExamPortalProject/frontend/kodwa_client/src/assets/logo.png"

  constructor() { }

  ngOnInit(): void {
  }

}
