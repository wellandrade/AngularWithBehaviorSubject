import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  product: Product = {
    name: '',
    price: 0
  };

  constructor(private productService: ProductService,
    private headerService: HeaderService,
    private router: Router) {
    this.headerService.headerData = {
      title: 'Novo Produto',
      icon: 'storefront',
      routeUrl: ''
    }
  }

  createProduct() {
    this.productService.create(this.product).subscribe((result: Product) => {
      this.productService.showMessage('Produto criado com sucesso');
      this.router.navigate(['products']);
    }, error => {
      this.productService.showMessage('Falha ao cadastrar o produto');
    });
  }

  cancel() {
    this.router.navigate(['products']);
  }

}
