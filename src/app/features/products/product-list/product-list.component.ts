import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { product } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // Array of products with type product(created in models)
  productsArray!: product[];
  // @Output()
  // itemAddedFromproductList: EventEmitter<product> = new EventEmitter<product>();


  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    // Here, Data is shown from the service (backend)
  this.getAll()
  }
getAll(){
  this.productService.getAllProducts().subscribe(

    (res)=>{this.productsArray=res.product;
      for(let i=0;i<this.productsArray.length;i++){
        this.productsArray[i].rep=1;
      }
      //Math.ceil( res.numberOfProducts/3);
    }
      ,
    (err)=>{console.log(err)}
  )
  
}

  // Replaced with service
  // When itemAdded event fire, call this function
  // onItemAdded(product :product) {
  //   this.itemAddedFromproductList.emit(product);
  // }

}
