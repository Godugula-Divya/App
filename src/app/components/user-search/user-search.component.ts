import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  product:Product[];
  category: Category[];
  searchName:string;
  categoryId: number;
  constructor(public activatedroute:ActivatedRoute,private router:Router,private productserv: ProductServiceService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(()=>{
      this.getAllProducts()})
      this.getAllCategories();
  }

  search(){
    this.router.navigateByUrl("/search/"+this.searchName);
  }

  show1(){
    this.router.navigateByUrl("userpage");
  }

  show2(){
    this.router.navigateByUrl("user-about");
  }

  show3(){
    this.router.navigateByUrl("user-contact");
  }

  show4(){
    this.router.navigateByUrl("cart");
  }

  show5(){
    this.router.navigateByUrl("");
  }

  addtocart(product:Product){
    this.router.navigateByUrl("/cart");
    this.productserv.addtocart(product);
    window.alert("Item added to cart succesfully");
  }

  getAllCategories() {
    this.productserv.getAllCategories().
    subscribe(data=>{      
      this.category=data
    });
  }
  getAllProducts() {
    const hascategoryId:boolean = this.activatedroute.snapshot.paramMap.has("id");
    const hassearchName:boolean = this.activatedroute.snapshot.paramMap.has("name");
    if(hascategoryId){
      //get employees by DeptId
      this.categoryId = +this.activatedroute.snapshot.paramMap.get("id");
      this.productserv.getProductByCatId(this.categoryId).subscribe(data => {
        console.log(data);
        this.product = data;
      })
  
    }
    //searchbyname
    else if(hassearchName)
    {
  
      this.searchName=this.activatedroute.snapshot.paramMap.get("name");
      console.log(this.searchName);
      this.productserv.getProductByName(this.searchName).subscribe(data=>{
          console.log(data);
        this.product=data;
      });
    
    }
    else {
        this.productserv.getAllProducts().subscribe(data => {
          console.log(data);
          this.product = data;
        })
    }
  
  }
  }