import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { product } from '../../../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  //@Input Decorator >> Tell child component that you'll have data objects from your parent only
  @Input() // From parent to child
  productItem !: product;
  
  
  //@Output Decorator >> Tell parent component that there's an event fired on his child
  // From child to parent
  // @Output()
  // itemAdded: EventEmitter<product> = new EventEmitter<product>();


  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

 onAddToCartPressed() {
  // this.itemAdded.emit(this.productItem)
 if( !this.productService.cartArray.find(ele=>this.productItem._id==ele._id)){
  this.productService.addItemToCart(this.productItem);
  //console.log(this.productItem.price)
}
   else {
     this.productService.cartArray.splice(this.productService.cartArray.indexOf(
      this.productItem),1);
           
           this.productItem.rep++
           this.productService.addItemToCart(this.productItem)
          //this.productItem.splice(this.productItem.id-1,1);
          //console.log(this.productService.rep);
          //console.log(this.productService.cartArray.indexOf(
            //this.productItem))
   }
 }
 getid():void{this.productService.setidOfEle(this.productItem)}

}
