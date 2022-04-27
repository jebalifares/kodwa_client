import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {
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
  }];
  constructor(private _category:CategoryService) { }

  ngOnInit(): void {
    this._category.categories().subscribe((data:any)=>{
      this.categories=data;

    },
    (error)=>{
      console.log(error)
      Swal.fire("error in loading data")
    });
  }

}
