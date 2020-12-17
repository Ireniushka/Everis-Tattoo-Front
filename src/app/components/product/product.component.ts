import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.product = this.productService.getProduct(id);
  }

}
