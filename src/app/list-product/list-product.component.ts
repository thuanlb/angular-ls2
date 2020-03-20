import { Component, OnInit } from '@angular/core';
import { data } from '../MockProduct';
import { Product } from '../Product';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products = data;
  constructor() { }

  ngOnInit(): void {
  }

  selected: Product;


        removeItem(id){
          this.products = this.products.filter(product =>product.id != id);
        }

        detailProduct(product){
          this.selected = product;
        }


}
