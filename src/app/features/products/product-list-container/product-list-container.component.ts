import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {
  // Li filters sidebar objects
  liItems = [
    {
      liLabel: "Arts and Crafts",
      iconClassName: "link__icon fas fa-angle-right"
    },
    {
      liLabel: "Automotive",
      iconClassName: "link__icon fas fa-angle-right"
  },{
    liLabel: "Baby",
    iconClassName: "link__icon fas fa-angle-right"
},{
  liLabel: "Books",
  iconClassName: "link__icon fas fa-angle-right"
},{
  liLabel: "Eletronics",
  iconClassName: "link__icon fas fa-angle-right"
},{
  liLabel: "Women's Fashion",
  iconClassName: "link__icon fas fa-angle-right"
},{
  liLabel: "Men's Fashion",
  iconClassName: "link__icon fas fa-angle-right"
},{
  liLabel: "Health & Household",
  iconClassName: "link__icon fas fa-angle-right"
},{
  liLabel: "Home & Kitchen",
  iconClassName: "link__icon fas fa-angle-right"
},{
  liLabel: "Military Accessories",
  iconClassName: "link__icon fas fa-angle-right"
},{
  liLabel: "Movies & Television",
  iconClassName: "link__icon fas fa-angle-right"
},{
  liLabel: "Sports & Outdoors",
  iconClassName: "link__icon fas fa-angle-right"
},{
  liLabel: "Tools & Home Improvement",
  iconClassName: "link__icon fas fa-angle-right"
},{
  liLabel: "Toys & Games",
  iconClassName: "link__icon fas fa-angle-right"
},
  ]

  @Output()
  onItemAddedFromContainer: EventEmitter<product> = new EventEmitter<product>();
  onItemAdded(product: product) {
    this.onItemAddedFromContainer.emit(product);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
