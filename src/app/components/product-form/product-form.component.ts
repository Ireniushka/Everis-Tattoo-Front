import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  form;

  constructor(private formBuilder: FormBuilder){
    this.form = formBuilder.group({
      name: [''],
      category: [''],
      description: [''],
      price: [''],
      //img: [''],
    });
  }

  ngOnInit(): void {
  }

  searchProduct() {
    console.log(this.form.value);
    //hacer push // creamos interfaz producto?
  }

  addProduct() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
    else{
      alert("Rellene todos los campos, por favor");
    }
  }


}
