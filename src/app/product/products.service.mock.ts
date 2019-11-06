import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Product from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductsServiceMock {

  //uri = 'http://localhost:4000/products';
  products = [];

  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductDescription, ProductPrice) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    console.log(obj);
    this.products.push(obj);
  }
  
  getProducts() {
    return this.products;
  }

  editProduct(id) {
    return this.products[id];
  }
       
  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
      const obj = {
        ProductName,
        ProductDescription,
        ProductPrice
      };
      this.products[id] = obj;
  }

  deleteProduct(id) {
    this.products.splice(id,1);
  }

}
