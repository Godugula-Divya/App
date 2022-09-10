import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public activatedroute:ActivatedRoute,private router:Router,private productserv: ProductServiceService ) { }

  ngOnInit(): void {
  }
divya(){
  this.router.navigateByUrl("divyaaaa");
}
}
