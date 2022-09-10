import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchName:string;
  user1:User = new User(0,"krishna","kumar","krish@gmail.com","krrishna","8887456554","hyd","XXX");
  user2:User= new User(0,"krishna","kumar","krish@gmail.com","krishna","8749123560","hyd","XXX");
  editable:boolean=false;

  constructor(public activatedroute:ActivatedRoute,private router:Router,private usertypeserv: ProductServiceService) { }

  ngOnInit(): void {
  }
  search(){
    this.router.navigateByUrl("/search/"+this.searchName);
  }

  show1():void
  {
      if( this.user1.Usertype=="admin")
      {
      this.router.navigateByUrl("/user");//crud operations
      console.log("admin verified");
      window.alert("login successfull");
      }
      else if(this.user1.Usertype=="" )
      {
      this.router.navigateByUrl("/product");//display code
      console.log("user verified");
      window.alert("login successfull");
      }
      else
      {
      this.router.navigateByUrl("/search");
      window.alert("login Failed....Try Again!");
      }
    }

  show2()
  {
    if(this.editable)
    {
      this.usertypeserv.updateUser(this.user2).subscribe(data=>
        console.log(data));
        this.router.navigateByUrl("/usertypes"); 
    }
    else{
    console.log(this.user2);
    this.usertypeserv.saveUser(this.user2).subscribe(data=>
      console.log(data));
      this.router.navigateByUrl("/usertypes");
    }
  }
  
}
