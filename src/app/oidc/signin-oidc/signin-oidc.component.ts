import { Component, OnInit } from '@angular/core';
import { OpenIdConnectService } from '../open-id-connect.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'ac-signin-oidc',
  templateUrl: './signin-oidc.component.html',
  styleUrls: ['./signin-oidc.component.scss']
})
export class SigninOidcComponent implements OnInit {

  constructor(private oidc:OpenIdConnectService,private router:Router) { }

  ngOnInit() {
    this.oidc.userLoaded$.subscribe(userloaded=>{
      if(userloaded){
          this.router.navigate(['/dashbord'])
      }else{
        console.log("err login")
      }
    });
    this.oidc.handleCallback()
  }

}
