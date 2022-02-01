import { Injectable } from '@angular/core';
import { paymentType } from '../models/payment-type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }
  paymentMethod:paymentType[]=
  [{id:1,name:'method1'},
  {id:2,name:'method2'},
  {id:3,name:'method3'}



  ]
  getAll(){
    return this.paymentMethod.slice()
  }
  //checkwhich()
}
