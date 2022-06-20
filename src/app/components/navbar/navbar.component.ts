import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(public _authenticationService:AuthenticationService,private _router:Router) { }
  ngOnInit(): void {
    this.getusername();

    
  }
  username:any=    this._authenticationService.getRoleName();
;

  checkIsLogin(){
    return this._authenticationService.isLoggedIn();
  }
  logout(){
    this._authenticationService.clear();
    this._router.navigateByUrl('/sginin');
  }
  getusername(){
    return this.username=this._authenticationService.getRoleName();
  }

 

  
}
