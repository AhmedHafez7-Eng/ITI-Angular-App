import { Injectable } from '@angular/core';
import { category } from '../models/category.model';

//tell us that we can provide another services inside this service
// Same as I put it in app-module [providers]
@Injectable({
  // Tell the service to provie itself inside the root component
// to be shared for all components
  providedIn: 'root'
})
export class CategoryService {
  categories:category[]=[
   {id:2,name:'cat1'},
   {id:2,name:'cat2'},
   {id:3,name:'cat3'},
   {id:4,name:'cat4'},



  ]

  constructor() { }
  getAllCategories(){
   return this.categories.slice()
  }
}
