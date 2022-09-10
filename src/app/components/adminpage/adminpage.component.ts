import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(public activatedroute:ActivatedRoute,private router:Router,private productserv: ProductServiceService ) { }

  ngOnInit(): void {
  }
  updatePro(){
    this.router.navigateByUrl("product");
  }

  updateusers(){
    this.router.navigateByUrl("user");
  }

  
  show4():void
  {
    this.router.navigateByUrl("");
  }
}
