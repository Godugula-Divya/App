import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  products:Product[];
  categories:Category[];
  searchName:string;
  constructor(public activatedroute:ActivatedRoute,private router:Router,private productserv: ProductServiceService) { }

  ngOnInit(): void {
  }

  getAllProducts(){
    this.productserv.getAllProducts().subscribe(data=>{
      this.products=data
    });
  }

  search(){
    this.router.navigateByUrl("/user/category/"+this.searchName);
  }

  show1(){
    this.router.navigateByUrl("userpage");
  }

  show4(){
    this.router.navigateByUrl("cart");
  }

  show5(){
    this.router.navigateByUrl("");
  }
}
