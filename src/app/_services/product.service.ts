import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { product } from "../models/product.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";


//tell us that we can provide another services inside this service
// Same as I put it in app-module [providers]
@Injectable({
  // Tell the service to provie itself inside the root component
// to be shared for all components
  providedIn: 'root'
})

// // We created this class to have a single source of truth
// that database and functions in one place
export class ProductService{
  // itemAdded: EventEmitter<any> = new EventEmitter<any>();
   productArray!: product[] 
  // = [
  //   {
  //     id: 1,
  //     data:[{id:1,name:'product1',description:'p1 desc',lang:{id:1,name:'english'}}],
  //     category:{id:1,name:'cat1'},
  //     payment:{id:1,name:'master'},
  //     tags:{id:1,name:'tag1'},
  //     price: 100,
  //     discount: 10,
  //     imagesUrls: ["https://picsum.photos/200/300"],
  //     rep:1
  //   },
  //   {
  //     id: 2,
      
  //     price: 200,
  //     discount: 10,
  //     data:[{id:2,name:'product2',description:'p2 desc',lang:{id:1,name:'english'}}],
  //     category:{id:1,name:'cat1'},
  //     payment:{id:1,name:'master'},
  //     tags:{id:1,name:'tag1'},
  //     imagesUrls: ["https://picsum.photos/300/400"],
  //     rep:1
  //   },
  //   {
  //     id: 3,
     
  //     price: 300,
  //     data:[{id:3,name:'product3',description:'p3 desc',lang:{id:1,name:'english'}}],
  //     category:{id:1,name:'cat1'},
  //     payment:{id:1,name:'master'},
  //     tags:{id:1,name:'tag1'},
  //     imagesUrls: ["https://picsum.photos/400/500"],
  //     rep:1
  //   },
  //   {
  //     id: 4,
      
  //     price: 1100,
  //     discount: 30,
  //     data:[{id:4,name:'product4',description:'p4 desc',lang:{id:1,name:'english'}}],
  //     category:{id:1,name:'cat1'},
  //     payment:{id:1,name:'master'},
  //     tags:{id:1,name:'tag1'},
  //     imagesUrls: ["https://picsum.photos/450/550"],
  //     rep:1
  //   },
  //   {
  //     id: 5,
  //     data:[{id:5,name:'product5',description:'p5 desc',lang:{id:1,name:'english'}}],
  //     category:{id:1,name:'cat1'},
  //     payment:{id:1,name:'master'},
  //     tags:{id:1,name:'tag1'},
  //     price: 2100,
  //     discount: 50,
     
  //     imagesUrls: ["https://picsum.photos/200/300"],
  //     rep:1
  //   },
  //   {
  //     id: 6,
  //     data:[{id:6,name:'product6',description:'p6 desc',lang:{id:1,name:'english'}}],
  //     category:{id:1,name:'cat1'},
  //     payment:{id:1,name:'master'},
  //     tags:{id:1,name:'tag1'},
  //     price: 100,
  //     discount: 10,
      
  //     imagesUrls: ["https://picsum.photos/200/300"],
  //     rep:1
  //   },
  //   {
  //     id: 7,
      
  //     price: 100,
  //     data:[{id:7,name:'product7',description:'p7 desc',lang:{id:1,name:'english'}}],
  //     category:{id:1,name:'cat1'},
  //     payment:{id:1,name:'master'},
  //     tags:{id:1,name:'tag1'},
  //     imagesUrls: ["https://picsum.photos/200/300"],
  //     rep:1
  //   },
  //   {
  //     id: 8,
      
  //     price: 100,
  //     discount: 10,
  //     data:[{id:8,name:'product8',description:'p8 desc',lang:{id:1,name:'english'}}],
  //     category:{id:1,name:'cat1'},
  //     payment:{id:1,name:'master'},
  //     tags:{id:1,name:'tag1'},
  //     imagesUrls: ["https://picsum.photos/200/300"],
  //     rep:1
  //   },
  // ];
  cartArray: product[] =[];
  //rep:number=1;
  myid?:product
  constructor(private httpclient:HttpClient) {

  }

  // Business Logic Layer
  getAllProducts(): Observable<{product:product[],numberOfProducts:number}> {
   return this.httpclient.get<{product:product[],numberOfProducts:number}>(`${environment.baseUrl}product`)
    //return this.productArray.slice()
  }
   getProductById(id: string) : product | undefined {
     return this.productArray.find(item => item._id === id);
   }
  addProduct(product: product) {
    this.productArray.push(product)
  }
  // deleteProduct(id: number) : product[]{
  //   return this.productArray.filter(item => item.id != id)
  // }
  addItemToCart(product: product): product[]{
     this.cartArray.push(product)
      const result = this.cartArray;
      console.log(result);
  
      return result;
     }
     setidOfEle(id:product){this.myid=id}
     getidOfEle(){return this.myid}
     ////////////////////////////////
     total!:number
     caltotal(){
    this.total=0
      for(let i=0;i<this.cartArray.length;i++){
        //console.log(i)
      
     this.total+=(this.cartArray[i].price)*this.cartArray[i].rep;
    // console.log(this.total)
      }
    return this.total
    
      }
      l!:number
      counter(){
        this.l=0
      for(let i=0;i<this.cartArray.length;i++){
        this.l+=this.cartArray[i].rep
      }
      return this.l;
      }
     
  
  // updateProduct(id: number): product[]{

  // }
  // deletecart(id: number) : product[]{
  //   const res= this.cartArray.filter(item => item.id != id);

  //   console.log(res)
  //   return(res)
  // }
  //preventdublicated(i:number){return this.rep;}
}
