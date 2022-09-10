import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import {HttpClientModule} from '@angular/common/http'
import {Router,Routes} from '@angular/router'
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { UserComponent } from './components/user/user.component';
import { UserCategoryComponent } from './components/user-category/user-category.component';
import { CategoryComponent } from './components/category/category.component';
import { UserProductComponent } from './components/user-product/user-product.component';
import { CartComponent } from './components/cart/cart.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { FinalComponent } from './components/final/final.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { HealthnNutritionsComponent } from './components/healthn-nutritions/healthn-nutritions.component';

const routes:Routes=[{path:"divya",component:ProductComponent},
{path:"",component:WelcomeComponent},{path:"products",component:ProductComponent},
{path:"add",component:AddProductComponent},{path:"update",component:AddProductComponent},
{path:"",component:RegistrationComponent},{path:"Login",component:LoginComponent} ,
{path:"Registration",component:RegistrationComponent},{path:"divyaaaa",component:HomeComponent} ,
{path:"registration",component:HomeComponent} ,{path:"Login",component:LoginComponent},
{path:"logout",component:WelcomeComponent},{path:"userlogin",component:HomeComponent},
{path:"product",component:AddProductComponent},{path:"user",component:AddProductComponent},


{path : 'adminpage',component:AdminpageComponent},
  {path : 'userpage',component:UserComponent},
  {path : 'product-form',component:ProductComponent},
  {path : 'updateproduct/:id',component:ProductComponent},
  {path : 'user-form',component:UserComponent},
  {path : 'updateuser/:id',component:UserComponent},
  {path : 'product',component:ProductComponent},
  {path : 'category',component:CategoryComponent},
  {path : 'home/category/:id',component:HomeComponent},
  {path : 'home/category/:name',component:SearchComponent},
  {path : 'user/category/:id',component:UserSearchComponent},
  {path : 'user/category/:name',component:UserSearchComponent},
  {path :'user',component:UserComponent},
  {path : 'search/:ename',component:UserSearchComponent},
  {path : 'home-product',component:ProductComponent},
  {path : 'user-product',component: UserProductComponent},
  {path : 'cart',component: CartComponent},
  {path : 'payment',component: PaymentComponent},
  {path : 'final',component: FinalComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    WelcomeComponent,
    AddProductComponent,
    RegistrationComponent,
    HomeComponent,
 LoginComponent,
 SearchComponent,
 AdminpageComponent,
 UserComponent,
 UserCategoryComponent,
 CategoryComponent,
 UserProductComponent,
 CartComponent,
 UserSearchComponent,
 FinalComponent,
 PaymentComponent,
 UserPageComponent,
 HealthnNutritionsComponent,
 

  ],
  imports: [
    BrowserModule,
    HttpClientModule,RouterModule.forRoot(routes),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
