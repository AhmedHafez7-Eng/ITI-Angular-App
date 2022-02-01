import { TagOpenStartToken } from "@angular/compiler/src/ml_parser/tokens";
import { category } from "./category.model";
import { paymentType } from "./payment-type.model";
import{productLang} from './product-lan.model'
import { tag } from "./tags.model";

export interface product{
  _id: string,
  data:productLang[],
  price: number,
  discount?: number,
  
  imagesUrls: string[],
  category:category,
  payment:paymentType,
  tags:tag,
  rep:number
}
