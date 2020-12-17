import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  id;

  productService: ProductService;

  constructor(private formBuilder: FormBuilder){  }

  form = this.formBuilder.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    description: [''],
    price: ['', Validators.required],
    img: [''],
  });

  ngOnInit(): void {
  }

  getProduct() {
    this.productService.getProduct(this.id);
  }

  addProduct() {
    this.productService.addProduct(this.form);
  }


}
