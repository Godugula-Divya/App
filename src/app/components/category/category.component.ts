import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  constructor(public activatedroute:ActivatedRoute,private router:Router,private productserv: ProductServiceService) { }

  ngOnInit(): void {
      this.activatedroute.paramMap.subscribe(()=>{
        this.getAllCategories()});
      }

  getAllCategories(){
    this.productserv.getAllCategories().subscribe(data=>{
      this.categories=data
    });
  }

}
