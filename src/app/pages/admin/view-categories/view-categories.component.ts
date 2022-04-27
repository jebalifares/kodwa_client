import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../services/category.service';
import Swal from 'sweetalert2'
import {MatDialog} from '@angular/material/dialog';
import { ReferenceComponent } from './../reference/reference.component';
import { ViewReferenceComponent } from './../view-reference/view-reference.component';


@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
  categories=[{
    cid:1,
    title:'Java Programming',
    description:'this is java category programming'
  },
  {
    cid:2,
    title:'C Programming',
    description:'this is C category programming'
  },
  {
    cid:3,
    title:'android Programming',
    description:'this is java android programming'
  }]
reference :any ={
  savoir_etre:'java technique',
  savoir_faire:' developper des apis java technique'


}
  constructor(private _category:CategoryService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this._category.categories().subscribe((data:any)=>{
      this.categories=data;

    },
    (error)=>{
      console.log(error)
      Swal.fire("error in loading data")
    });
    
  }
  openDialog(){
    this.dialog.open(ViewReferenceComponent,
      {
        data:this.reference,
        height: '400px',
        width: '600px',
        
      }
      );
      
    
  }

}
