import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import Product from 'src/app/shared/models/product';
import { ProductsService } from '../../products.service';
import { ProductsServiceMock } from '../../products.service.mock';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.scss']
})

export class ProductGetComponent implements OnInit, AfterViewInit  {
 
  //@ViewChild('theTable', {static: false}) theTable: ElementRef;

  products: Product[];
  displayedColumns: string[] = ['name', 'description', 'price', 'actions'];
 
  constructor(private ps: ProductsServiceMock) { }

  ngOnInit() {
    this.ps
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
    });
  }
  
  deleteProduct(id) {
    this.ps.deleteProduct(id).subscribe(res => {
      this.products.splice(id, 1);
    });
}

  ngAfterViewInit() {
    //this.theTable.nativeElement.renderRow();
  }
}
