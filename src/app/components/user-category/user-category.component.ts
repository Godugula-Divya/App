import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-user-category',
  templateUrl: './user-category.component.html',
  styleUrls: ['./user-category.component.css']
})
export class UserCategoryComponent implements OnInit {
  category:Category[]
  constructor(public activatedroute:ActivatedRoute,private router:Router,private productserv: ProductServiceService ) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(()=>{
      this.getAllCategories()});
    }

getAllCategories(){
  this.productserv.getAllCategories().subscribe(data=>{
    this.category=data
  });
}

}
