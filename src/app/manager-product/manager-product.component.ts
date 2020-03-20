import { Component, OnInit } from '@angular/core';
import { data } from '../MockProduct';
import { Product } from '../Product';

@Component({
  selector: 'app-manager-product',
  templateUrl: './manager-product.component.html',
  styleUrls: ['./manager-product.component.css']
})
export class ManagerProductComponent implements OnInit {

  products = data;

  constructor() { }

  ngOnInit() {
  }


  selected: Product;


        removeItem(id){
          this.products = this.products.filter(product =>product.id != id);
        }

        detailProduct(product){
          this.selected = product;
        }

}