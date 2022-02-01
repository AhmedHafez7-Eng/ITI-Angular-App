import { Component } from '@angular/core';
import { product } from './models/product.model';

// export interface Cart{
//   productArray: {
//     product: product,
//     quantity: number
//   }[];
//   totalElNumber: number
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_course_project';

  // addedproduct >> Global variable to be able to share it globally with navbar component
  // addedProduct = {} as product;
  addedProducts !: product[];

  onItemAdd(product: product) {
    this.addedProducts.push(product);
  }
}
