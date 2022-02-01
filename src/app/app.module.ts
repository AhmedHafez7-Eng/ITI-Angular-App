import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { TopnavComponent } from './layout/topnav/topnav.component';
import { ProductItemComponent } from './features/products/product-item/product-item.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductListContainerComponent } from './features/products/product-list-container/product-list-container.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { TestDirectiveDirective } from './shared/test-directive.directive';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { ProductService } from './_services/product.service';
import { ProductAddComponent } from './features/products/product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { SpamComponent } from './spam/spam.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopnavComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductListContainerComponent,
    TestCompComponent,
    TestDirectiveDirective,
    DropDownComponent,
    ProductAddComponent,
    ProductdescriptionComponent,
    SpamComponent,
    Page2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  // Dependency Injection
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
