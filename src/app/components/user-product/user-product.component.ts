import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent implements OnInit {
  product: Product[];
  constructor(public activatedroute:ActivatedRoute,private router:Router,private productserv: ProductServiceService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(()=>{
      this.getAllProducts()});
    }
  
    getAllProducts(){
      this.productserv.getAllProducts().subscribe(data=>{
        this.product=data
      });
    }
    
    addtocart(product:Product){
      this.router.navigateByUrl("/cart");
      this.productserv.addtocart(product);
      window.alert("Item added to cart succesfully");
    }
    

}
