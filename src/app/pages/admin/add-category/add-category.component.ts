import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category={
    title:'',
    description:''
  }

  constructor(private _category:CategoryService,private _snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  formSubmit(){
    if(this.category.title.trim()=='' || this.category.title==null){
      this._snack.open("Title required!!",'',{
        duration:4000,
      });
      return;
    }
    //add category
    this._category.addcategory(this.category).subscribe((data:any)=>{
      //this.category.title='',
      //this.category.description='',
Swal.fire("succes!!",'Category is add succesfuly','success')
    },
    (error)=>{
      Swal.fire("error!!",'Server error','error')
    })
  }

}
