import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  };

  constructor(private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];

    this.productService.getProductById(id).subscribe((result: Product) => {
      this.product = result;
    }, error => {
      this.productService.showMessage('Falha ao obter o produto');
    })

  }

  updateProduct() {
    this.productService.update(this.product).subscribe((result: Product) => {
      this.productService.showMessage('Produto alterado com sucesso');
      this.router.navigate(['products']);
    }, error => {
      this.productService.showMessage('Falha ao alterar o produto');
    });
  }

  cancel() {
    this.router.navigate(['products']);
  }
}
