import { AuthenticationService } from './../../services/authentication.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public loginData={
    userName:'',
    userPassword:''
  };
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _authenticationService:AuthenticationService,
    private _snackBar: MatSnackBar,
    private _router:Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    if(this.loginData.userName.trim()=='' || this.loginData.userName==null){
      this._snackBar.open("username  is required.","OK",{
        duration:3000
      });
      return;
      
      
    }
    if(this.loginData.userPassword.trim()=='' || this.loginData.userPassword==null){
      this._snackBar.open("password is required.","OK",{
        duration:3000
      });
      return;
    }
    this._authenticationService.generateToken(this.loginData).subscribe(
      (response:any)=>{

        console.log(response.jwtToken);
        console.log(response.user.role);
               
        this._authenticationService.setToken(response.jwtToken);
          this._authenticationService.setRoles(response.user.role);

          this._authenticationService.setRoleName(response.user.role[0].roleName);
         this._authenticationService.SetUser(response.user);

         this._authenticationService.getCurrentUser().subscribe((data)=>{
           console.log(data);
         })
const role=response.user.role[0].roleName;
this._authenticationService.SetUser(response.user);
console.log(this._authenticationService.getUser())
         

        if(role=='Admin'){

          this._router.navigateByUrl("/admin-dashboard");
          this._authenticationService.setRoleName('Admin');

        }
        if(role=='User'){
          this._router.navigateByUrl("/user-dashboard");
        }          this._authenticationService.setRoleName('User');



      },
      (error)=>{
console.log(error);
      }
      );
    }
  

        /*}}
        this._authenticationService.loginUser(response.token);
        this._authenticationService.getCurrentUser().subscribe(
          (response)=>{
            this._authenticationService.setUser(response);
            if(this._authenticationService.getUserRole()=='NORMAL'){
              this._authenticationService.loginSubject.next(true);
              this._router.navigateByUrl("/user-dashboard");
            }else if(this._authenticationService.getUserRole()=='ADMIN'){
              this._authenticationService.loginSubject.next(true);
              this._router.navigateByUrl("/admin-dashboard");
            }else{
              this._authenticationService.logout();
            }    
          }
        );
      }
    );
  }

  openSnackBar(message:string, action:string) {
    this._snackBar.open(message, action, {
      duration:5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });*/
  




 
  }