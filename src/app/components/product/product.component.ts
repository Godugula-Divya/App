import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products:Product[]; 
  
 // getAllProducts: any;*

  constructor(public activatedroute:ActivatedRoute,private router:Router,private productserv: ProductServiceService ) { }

  ngOnInit(): void {
  
    this.getAllProducts();
    this.activatedroute.paramMap.subscribe(()=>{this.getAllProducts()});

  }
  addEmpForm(){
    this.router.navigateByUrl("add")


  }
  updateEmp(id:number){
    this.router.navigateByUrl("update")
  }
  deleteEmp(id:number){
    if(confirm("Do you want to delete"))
    {
      this.productserv.deleteProduct(id).subscribe(data=>{
        console.log("deleted")
     //reload the list
     this.getAllProducts();
     })
    }
    
  }
  getAllProducts(){
this.productserv.getAllProducts().subscribe(data=>{
  this.products=data
});
  }

}