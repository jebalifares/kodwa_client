import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 public user={
  "userName":'',
  "userFirstName":'',
  "userLastName":'',
  "userPassword":'',
  "role":[
    {
    "roleName":'',
    "roleDescription":''
    }
  ]
  
 };
  constructor(private _authenticationService :AuthenticationService) { }

  ngOnInit(): void {
   this.user= localStorage.user;
   console.log(this._authenticationService.getUser());
   

   
    
  }

}
