import { Component, OnInit } from '@angular/core';
import Product from '../Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {


  products= [
		{'ProductName': 'bag','ProductDescription': '10bags','ProductPrice': 100},
		{'ProductName':'comp', 'ProductDescription':'lenovo','ProductPrice': 20000},
		{'ProductName':'veggies', 'ProductDescription':'loaded from ktm','ProductPrice': 677777},
    {'ProductName': 'mango','ProductDescription': 'ripe','ProductPrice': 100},
		{'ProductName':'apple', 'ProductDescription':'red','ProductPrice': 20000},
		{'ProductName':'cat', 'ProductDescription':'furry','ProductPrice': 677777},
		{'ProductName':'dog', 'ProductDescription':'chubby','ProductPrice': 77777}
	];

  constructor(private ps: ProductsService) { }

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
}
