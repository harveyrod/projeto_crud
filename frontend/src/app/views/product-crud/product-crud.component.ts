import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private HeaderService: HeaderService) {
    HeaderService.headerData = {
      title: 'Cadastro <=> Exclusão de produtos',
      icon: 'fiber_new',
      routeUrl: '/products'
    }
   }

  ngOnInit(): void {
  }

  navigateToProductCreate() : void {
    this.router.navigate(['products/create'])
  }

}
