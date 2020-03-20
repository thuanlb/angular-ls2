import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListProductComponent } from './list-product/list-product.component';
import { ItemProductComponent } from './item-product/item-product.component';
import { CategoryComponent } from './category/category.component';
import { SlideComponent } from './slide/slide.component';
import { ManagerProductComponent } from './manager-product/manager-product.component';



@NgModule({
  declarations: [
    AppComponent,

    ListProductComponent,
    ItemProductComponent,
    CategoryComponent,
    SlideComponent,
    ManagerProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
