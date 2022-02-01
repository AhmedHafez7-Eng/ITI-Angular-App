import { TemplateLiteral } from '@angular/compiler';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  // for cart toggler
  cartIsOpen = false;
  // For receiveing products from appComponent
  theAddedProduct:product[]=[]


total!:number
  constructor(private productService:ProductService) { }
  
  ngOnInit(): void {
    
    // if(this.productService.preventdublicated(this.productService.counter))
    
    
   this.theAddedProduct = this.productService.cartArray;
  //  del(id:number){this.theAddedProduct!.splice(id!,1);}
  

}
//this. theAddedProduct = this.productService.cartArray 

   
  del(id?:number){
    //this.total-=this.theAddedProduct[id!].price
    this.theAddedProduct!.splice(id!, 1);
  }
  //tell():void{console.log(this.counter)}
  //sum:number=this.theAddedProduct[0]?.rep
  totalfun(){return this.productService.caltotal()}
  calllen(){return this.productService.counter()}


}

