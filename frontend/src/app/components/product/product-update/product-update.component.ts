import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})

export class ProductUpdateComponent implements OnInit {

  product!: Product;

  constructor(
    private ProductService: ProductService, 
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void { // COMPONENTE DE LEITURA
    const id = this.route.snapshot.paramMap.get('id')
    this.ProductService.readById(`${id}`).subscribe(product => {
      this.product = product;
    })
  }  
  
  updateProduct(): void { // COMPONENTE DE ATUALIZAÇÃO
    this.ProductService.update(this.product).subscribe(() => {
      this.ProductService.showMessage('Produto atualizado com sucesso')
      this.router.navigate(["/products"]);
    })
  }

  cancel(): void { 
      this.router.navigate(["/products"])
    }    
}

function subscribe(arg0: (product: any) => void) {
  throw new Error('Function not implemented.');
}

