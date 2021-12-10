import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    id: 0,
    price: 0
  }

  constructor(private ProductService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.ProductService.create(this.product).subscribe(() => {
      this.ProductService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })  
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
  
}
