import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public activatedroute:ActivatedRoute,private router:Router,private productserv: ProductServiceService ) { }

  ngOnInit(): void {
  }
  show1(){
    this.router.navigateByUrl("")
  }
 
  login() { 
    this.router.navigateByUrl("Login")
  } 
  register() { 
    this.router.navigateByUrl("Registration")
  }
 
  search(){
    this.router.navigateByUrl("search")

  }
}
