import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user={

    userName:'',
    userFirstName:'',
    userLastName:'',
    userPassword:'',
    
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _userService:UserService,
              private _snackBar: MatSnackBar,private _router:Router) { }

  ngOnInit(): void {
  }

  public  clear(){
    this.user.userName='',
    this.user.userFirstName='',
    this.user.userLastName='',
    this.user.userPassword=''




  }

  public onRegister(){
    if(this.user.userFirstName==''|| this.user.userFirstName==null){
      this.openSnackBar("First name is required.","OK");
      return;
    }

    this._userService.saveUser(this.user).subscribe(
      (response)=>{
        Swal.fire(
          'Success',
          'a new user saved successfully',
          'success'
        );
        this._router.navigateByUrl("/sginin");

      }
      ,
      (error)=>{
        this.openSnackBar(error.error.message,"OK");
      }
    );
  }

  openSnackBar(message:string, action:string) {
    this._snackBar.open(message, action, {
      duration:5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
