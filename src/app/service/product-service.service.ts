import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import {map} from 'rxjs';
import { User } from '../common/user';
import { Category } from '../common/category';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  getProductByNameresp(searchName: string) {
    throw new Error('Method not implemented.');
  }

  items:Product[]=[];

  productURL:string="http://localhost:8080/medicare/productType";
  userURL:string="http://localhost:8080/medicare/userType";
  categoryURL:string="http://localhost:8080/medicare/category";
  cartURL:string="http://localhost:8080/medicare/cart";

    constructor(private httpClient:HttpClient) { }
    getAllProducts():Observable<Product[]>{
      return this.httpClient.get<getproductrepsonse>(this.productURL).pipe(map(response=>response._embedded.products))
      

    }
    updateProduct(product:Product):Observable<Product>
 {
   const httpOptions=
   {
     headers:new HttpHeaders({
       'content-type':'application/json',
       'Authorization' :'auth-token',
       'Access-Control-Allow-origin':'*'
     })
   };
   return this.httpClient.put<Product>(this.productURL+`/${product.id}`,product,httpOptions);
 }
 saveProduct(product:Product):Observable<Product>
 {
 const httpOptions=
 {
   headers:new HttpHeaders({
     'content-type':'application/json',
     'Authorization' :'auth-token',
     'Access-Control-Allow-origin':'*'
   })
 };
 return this.httpClient.post<Product>(this.productURL,product,httpOptions);
 }
 deleteProduct(id:number):Observable<Product>
 {
   const httpOptions=
   {
     headers:new HttpHeaders({
       'content-type':'application/json',
       'Authorization' :'auth-token',
       'Access-Control-Allow-origin':'*'
     })
   };
   return this.httpClient.delete<Product>(this.productURL+`/${id}`,httpOptions);
 }
 getProductById(id:number):Observable<Product>
 {
    const empURL=this.productURL+"/"+id;
   return this.httpClient.get<Product>(empURL);
 }
 saveUser(user: User):Observable<User>
  {
  const httpOptions=
  {
    headers:new HttpHeaders({
      'content-type':'application/json',
      'Authorization' :'auth-token',
      'Access-Control-Allow-origin':'*'
    })
  };
  return this.httpClient.post<User>(this.userURL,user,httpOptions);
  }
  getAllUsers() : Observable<User[]>{
    return this.httpClient.get<getUserResponse>(this. userURL).
    pipe(map(response=>response._embedded.user))
}
getUserById(UId:number):Observable<User>
 {
    const usertypeURL=this.userURL+"/"+UId;
   return this.httpClient.get<User>(usertypeURL);
 }

 updateUser(usertype:User):Observable<User>
 {
   const httpOptions=
   {
     headers:new HttpHeaders({
       'content-type':'application/json',
       'Authorization' :'auth-token',
       'Access-Control-Allow-origin':'*'
     })
   };
   return this.httpClient.put<User>(this.userURL+`/${usertype.id}`,usertype,httpOptions);
 }

 deleteUser(userId:number):Observable<User>
 {
   const httpOptions=
   {
     headers:new HttpHeaders({
       'content-type':'application/json',
       'Authorization' :'auth-token',
       'Access-Control-Allow-origin':'*'
     })
   };
   return this.httpClient.delete<User>(this.userURL+`/${userId}`,httpOptions);
 }
 getAllCategories() : Observable<Category[]>{
  return this.httpClient.get<GetCategoryResponse>(this.categoryURL).
  pipe(map(response=>response._embedded.categories))
}
getitems(){
  return this.items;
}
addtocart(product:Product){
  this.items.push(product);
}
getProductByCatId(catId:number):Observable<Product[]>{
  const productBycatIdUrl= "http://localhost:8080/medicare/productType/search/findBycatId?id="+ catId;
  return this.httpClient.get<getproductrepsonse>(productBycatIdUrl).pipe(map(response=> response._embedded.products));
 }
 getProductByName(name: string) : Observable<Product[]>
   {
    const searchUrl="http://localhost:8080/medicare/productType/search/findByName?name="+name;
      return this.httpClient.get<GetProductByname>(searchUrl).
      pipe(map(response=>response._embedded.products));
  }
 
}
interface getproductrepsonse{
  _embedded:{
    products:Product[]
  }
}
  interface getUserResponse{
    _embedded:{
      user:User[]
  }
  }
  interface GetCategoryResponse{
    _embedded :{
      categories : Category[]
    }
  }
  interface GetProductByname
{
 _embedded : {
   products :Product[]
 }
}