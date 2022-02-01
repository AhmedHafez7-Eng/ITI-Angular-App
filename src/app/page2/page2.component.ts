import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';
import { ProductService } from 'src/app/_services/product.service';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  productsArray!: product[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
   
  }
  

}
