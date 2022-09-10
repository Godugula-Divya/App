import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 // product: Product[];
products:Product=new Product(0,"Divya","jpg","2022-05-05",150,500,1001);
  constructor(public activatedroute:ActivatedRoute,private router:Router,private productserv: ProductServiceService ) { }
  editable : boolean=false;
  ngOnInit(): void {
  }
  onSubmit()
  {
    if(this.editable)
    {
      console.log(this.products);
      this.productserv.updateProduct(this.products).subscribe(data=>
        console.log(data));
        this.router.navigateByUrl("/products"); 
    }
    else{
    console.log(this.products);
    this.productserv.saveProduct(this.products).subscribe(data=>
      console.log(data));
      
      this.router.navigateByUrl("/products");
    }
  }
  getProductById() {
    const id=+this.activatedroute.snapshot.paramMap.get("id");
    if(id>0)
    {
      this.editable=true;
      this.productserv.getProductById(id).subscribe(data => {this.products=data});
    }
  }
  
}
