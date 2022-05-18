import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {
catId;

reference={
  category:{
   
  },
  savoir_etre:'',
  savoir_faire:'',
  savoir_todo:'',
  
};
  constructor(private _route:ActivatedRoute, private _cate:CategoryService,
    private _rout :Router) { }

  ngOnInit(): void {
    this.catId=this._route.snapshot.params.cid;
    this.reference.category['cid']=this.catId;
    
  }

  formSubmit(){
    
    this._cate.addReference(this.reference).subscribe((data)=>{
      console.log("ok");
      Swal.fire("succes","reference added succsufly","success")
      
      this._rout.navigateByUrl("/admin-dashboard/categories")

    })
  }

}
