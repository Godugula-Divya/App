import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public activatedroute:ActivatedRoute,private router:Router,private productserv: ProductServiceService ) { }
  userType:User = new User(0,"sai","latha","sai@gmail.com","xxx","7013822425","","admin/user");
  ngOnInit(): void {
  }
  onSubmit():void
  {
    console.log(this.userType);
    this.productserv.saveUser(this.userType).subscribe(data=>
      console.log(data));
      this.router.navigateByUrl("/registration");
  }
}
