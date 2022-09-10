import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public activatedroute:ActivatedRoute,private router:Router,private productserv: ProductServiceService ) { }
  user:User = new User(0,"sai","latha","sai@gmail.com","xxx","9874561230","hyd","user");
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.user.Usertype=="admin"){
    this.router .navigateByUrl("login");
    console.log("admin verify") ;
    window.alert("login successful");
    }
    else if(this.user.Usertype=="user"){
      this.router.navigateByUrl("userProductList");
      console.log("user veified");
      window.alert("user data successful")
    }
    else{
     this.router.navigateByUrl("notverified") 
     window.alert("login unsuccessful")
    window.alert("forgot password")
     console.log("not verified")
     
    }
  }
  show2():void
  {
    this.router.navigateByUrl("userlogin");
  }

  show3():void
  {
    this.router.navigateByUrl("/registration");
  }
}
