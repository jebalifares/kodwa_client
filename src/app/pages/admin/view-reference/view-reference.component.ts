import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-reference',
  templateUrl: './view-reference.component.html',
  styleUrls: ['./view-reference.component.css']
})
export class ViewReferenceComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{savoir_etre:String
    savoir_faire:String}) { }

  ngOnInit(): void {
  }

}
