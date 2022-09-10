import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User[];
  constructor(public activatedroute:ActivatedRoute,private router:Router,private userserv: ProductServiceService ) { }

    ngOnInit(): void {
      this.activatedroute.paramMap.subscribe(()=>{
        this.getAllUsers()});
      }

      getAllUsers(){
        this. userserv.getAllUsers().subscribe(data=>{
          this.user=data
        });
      }
    
      addEmpForm(){
        this.router.navigateByUrl("/empform")
      }
    
      updateUser(id:number){
        this.router.navigateByUrl("/updateuser/"+User);
      }

      deleteUser(userId:number){
        if(confirm("Do you want to delete"))
        {
          this.userserv.deleteUser(userId).subscribe(data=>{
            console.log("Deleted")
            this.getAllUsers();
          })
        }
      }

      show1():void
  {
    this.router.navigateByUrl("");
  }

  show2():void
  {
    this.router.navigateByUrl("user-form");
  }

  show3():void
  {
    this.router.navigateByUrl("adminpage");
  }
}
